import { createReducer } from "../../config/common/util/reducerUtil";
import { actionType } from "./EventConstants";

const initialState = []

const createEvent = (state, payload) => {
    return [
        ...state, payload.event
    ];
}
const updateEvent = (state, payload) => {
    return [
        ...state.filter(state => state.id !== payload.event.id),
        payload.event
    ];
}
const deleteEvent = (state, payload) => {
    return [
        ...state.filter(state => state.id !== payload.event)
    ];
}

const loadEvent = (state, payload) => {
    return payload.events
}

export default createReducer(initialState, {
    [actionType.CREATE_EVENT]: createEvent,
    [actionType.DELETE_EVENT]: deleteEvent,
    [actionType.UPDATE_EVENT]: updateEvent,
    [actionType.FETCH_EVENTS]: loadEvent,
})