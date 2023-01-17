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