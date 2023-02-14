import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions";
import { openToastr } from "../toastr/toastrActions";

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

export const uploadProfileImage = (file, fileName) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = {
            name: fileName
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
                name: fileName,
                url: downloadURL
            })
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}