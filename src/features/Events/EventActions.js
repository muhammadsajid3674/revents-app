import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions"
import { fetchSampleData } from "../data/mockApi"
import { actionType } from "./EventConstants"

export const createEvent = (event) => {
    return {
        type: actionType.CREATE_EVENT,
        payload: {
            event
        }
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
    return {
        type: actionType.UPDATE_EVENT,
        payload: {
            event
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