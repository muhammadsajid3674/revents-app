import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions";
import { openToastr } from "../toastr/toastrActions";
import cuid from 'cuid'
import firebase from '../../config/Firebase/FirebaseConfig'
import { actionType } from "../Events/EventConstants";

export const updateProfile = (user) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const { isLoaded, isEmpty, ...updatedUser } = user;
        try {
            await firebase.updateProfile(updatedUser)
            dispatch(openToastr('Toastr', { severity: 'success', message: 'Your profile has been updated' }))
        } catch (error) {
            console.log(error);
        }
    }
}

export const uploadProfileImage = (file) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const imageName = cuid();
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = {
            name: imageName
        }
        try {
            dispatch(asyncActionStart())
            // upload the file to firebase storage
            let uploadedFile = await firebase.uploadFile(path, file, null, options);
            // get url of image
            let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
            // get userDoc
            let userDoc = await firestore.get(`users/${user.uid}`);
            // check if user has photo, if not update photo
            if (!userDoc.data().photoURL) {
                await firebase.updateProfile({
                    photoURL: downloadURL
                });
                await user.updateProfile({
                    photoURL: downloadURL
                })
            }
            // add the image to firestore
            await firestore.add({
                collection: 'users',
                doc: user.uid,
                subcollections: [{
                    collection: 'photos'
                }]
            }, {
                name: imageName,
                url: downloadURL
            })
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}

export const deleteImage = (image) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        try {
            await firebase.deleteFile(`${user.uid}/user_images/${image.name}`)
            await firestore.delete({
                collection: 'users',
                doc: user.uid,
                subcollections: [{
                    collection: 'photos',
                    doc: image.id
                }]
            })
        } catch (error) {
            console.log(error);
            throw new Error('Problem while deleting the photo')
        }
    }
}

export const setMainProfile = (image) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.updateProfile({
                photoURL: image.url
            })
        } catch (error) {
            console.log(error);
            throw new Error('Problem while setting main profile')
        }
    }
}

export const goingToEvent = (event) => {
    return async (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const profile = getState().firebase.profile
        const attendee = {
            going: true,
            joinDate: firestore.FieldValue.serverTimestamp(),
            photoURL: profile.photoURL || '/assets/user.png',
            displayName: profile.displayName,
            host: false
        }
        try {
            await firestore.update(`events/${event.id}`, {
                [`attendees.${user.uid}`]: attendee
            })
            await firestore.set(`event_attendees/${event.id}_${user.uid}`, {
                eventDate: event.date,
                eventId: event.id,
                host: false,
                userUid: user.uid
            })
            dispatch(openToastr('Toastr', { severity: 'success', message: 'You are signup to the event.' }))
        } catch (error) {
            console.log(error);
            dispatch(openToastr('Toastr', { severity: 'error', message: 'Something wen wrong' }))
        }
    }
}

export const cancelGoingToEvent = (event) => {
    return async (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        try {
            await firestore.update(`events/${event.id}`, {
                [`attendees.${user.uid}`]: firestore.FieldValue.delete()
            })
            await firestore.delete(`event_attendees/${event.id}_${user.uid}`)
            dispatch(openToastr('Toastr', { severity: 'success', message: 'Your plane for the event cancel.' }))
        } catch (error) {
            console.log(error);
            dispatch(openToastr('Toastr', { severity: 'error', message: 'Something wen wrong' }))
        }
    }
}

export const getUserEvent = (userId, activeTab) => {
    return async (dispatch, getState) => {
        const firestore = firebase.firestore();
        const today = new Date();
        let eventRef = firestore.collection('event_attendees');
        let query;
        switch (activeTab) {
            case 1: // Past Events
                query = eventRef.where('userUid', '==', userId).where('eventDate', '<=', today).orderBy('eventDate', 'desc')
                break;
            case 2: // Future Events
                query = eventRef.where('userUid', '==', userId).where('eventDate', '>=', today).orderBy('eventDate')
                break;
            case 3: // Host Events
                query = eventRef.where('userUid', '==', userId).where('host', '==', true).orderBy('eventDate', 'desc')
                break;

            default:
                query = eventRef.where('userUid', '==', userId).orderBy('eventDate', 'desc')
        }
        try {
            dispatch(asyncActionStart())
            let querySnap = await query.get()
            let events = [];
            for (let i = 0; i < querySnap.docs.length; i++) {
                let evt = await firestore.collection('events').doc(querySnap.docs[i].data().eventId).get()
                events.push({
                    ...evt.data(),
                    id: evt.id
                });
            };
            dispatch({ type: actionType.FETCH_EVENTS, payload: { events } })
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }

    }
}