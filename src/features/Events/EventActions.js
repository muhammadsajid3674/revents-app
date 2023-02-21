import { createNewEvent } from "../../config/common/HelperMethods/createNewEvent"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions"
import { fetchSampleData } from "../data/mockApi"
import { closeModal, openModal } from "../Modals/ModalActions"
import { openToastr } from "../toastr/toastrActions"
import { actionType } from "./EventConstants"
import { actionType as modalActionType } from "../Modals/ModalConstants"

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

export const deleteEvent = (event) => {
    return {
        type: actionType.DELETE_EVENT,
        payload: {
            event
        }
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
}

export const loadEvent = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            const events = await fetchSampleData()
            dispatch({ type: actionType.FETCH_EVENTS, payload: { events } })
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}