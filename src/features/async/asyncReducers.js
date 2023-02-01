import { createReducer } from "../../config/common/util/reducerUtil"
import { actionTypes } from "./asyncConstant"

const initialState = {
    loading: false,
    elementName: null
}

const asyncActionStart = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionFinish = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(initialState, {
    [actionTypes.ASYNC_ACTION_START]: asyncActionStart,
    [actionTypes.ASYNC_ACTION_FINISH]: asyncActionFinish,
    [actionTypes.ASYNC_ACTION_ERROR]: asyncActionError,
})