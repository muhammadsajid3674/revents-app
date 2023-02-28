import { createNewEvent } from "../../config/common/HelperMethods/createNewEvent"
import { openModal } from "../Modals/ModalActions"
import { openToastr } from "../toastr/toastrActions"
import { actionType } from "./EventConstants"
import { actionType as modalActionType } from "../Modals/ModalConstants"
import firebase from '../../config/Firebase/FirebaseConfig'
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions"

export const createEvent = (event) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const user = firestore.auth().currentUser
        const photoURL = getState().firebase.profile.photoURL
        const newEvent = createNewEvent(user, photoURL, event)
        try {
            let createdEvent = await firestore.add('events', newEvent)
            await firestore.set(`event_attendees/${createdEvent.id}_${user.uid}`, {
                eventId: createdEvent.id,
                userUid: user.uid,
                eventDate: event.date,
                host: true
            })
            dispatch(openToastr('Toastr', { message: "Event is created successfully.", severity: "success" }))
            return createdEvent;
        } catch (error) {
            dispatch(openToastr('Toastr', { message: "Something went wrong.", severity: "error" }))
        }
    }
}

export const cancelEvent = (cancelled, eventId) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const message = cancelled ? 'Do you want to activate the event ?' : 'Do you want to cancel the event ?'
        dispatch(openModal('ConfirmModal', {
            message,
            successClick: async () => {
                await firestore.update(`events/${eventId}`, {
                    cancelled: cancelled
                })
                dispatch({ type: modalActionType.MODAL_CLOSE });
            },
        }));
    }
}

export const updateEvent = (event) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        try {
            await firestore.update(`events/${event.id}`, event)
            dispatch(openToastr('Toastr', { message: "Event is created successfully.", severity: "success" }))
        } catch (error) {
            dispatch(openToastr('Toastr', { message: "Something went wrong.", severity: "error" }))
        }
    }
};

export const getEventsForDashboard = (lastEvent) => {
    return async (dispatch, getState) => {
        const currentDate = new Date();
        const firestore = firebase.firestore();
        const eventRef = firestore.collection('events');
        try {
            dispatch(asyncActionStart())
            let startAfter = lastEvent && (await firestore.collection('events').doc(lastEvent.id).get());
            let query;
            lastEvent ? query = eventRef.where('date', '>=', currentDate).orderBy('date').startAfter(startAfter).limit(3) : query = eventRef.where('date', '>=', currentDate).orderBy('date').limit(3);
            let querySnap = await query.get();
            if (querySnap.docs.length === 0) {
                dispatch(asyncActionFinish())
                return querySnap;
            };
            let events = [];
            for (let i = 0; i < querySnap.docs.length; i++) {
                let evt = {
                    ...querySnap.docs[i].data(),
                    id: querySnap.docs[i].id
                }
                events.push(evt);
            };
            dispatch({ type: actionType.FETCH_EVENTS, payload: { events } });
            dispatch(asyncActionFinish());
            return querySnap;
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}

export const addEventComment = (eventId, value, parentId) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const profile = getState().firebase.profile;
        const user = firebase.auth().currentUser;
        try {
            let newComment = {
                parentId: parentId,
                displayName: profile.displayName,
                date: Date.now(),
                photoURL: profile.photoURL || '/assets/user.png',
                comment: value.comment,
                user: user.uid
            }
            await firebase.push(`event_chat/${eventId}`, newComment)
        } catch (error) {
            console.log(error);
            dispatch(openToastr('Toastr', { message: "Something went wrong.", severity: "error" }))
        }
    }
}