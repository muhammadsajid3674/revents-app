import { asyncActionFinish, asyncActionStart } from "../async/asyncActions"
import { actionTypes } from "../async/asyncConstant"
import actionType from "./TestAction"

export const incrementCount = () => {
    return {
        type: actionType.INCREMENT_COUNT
    }
}

export const decrementCount = () => {
    return {
        type: actionType.DECREMENT_COUNT
    }
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = (name) => {
    return async dispatch => {
        dispatch({ type: actionTypes.ASYNC_ACTION_START, payload: name })
        await delay(1000)
        dispatch(incrementCount())
        dispatch(asyncActionFinish())
    }
}

export const decrementAsync = (name) => {
    return async dispatch => {
        dispatch({ type: actionTypes.ASYNC_ACTION_START, payload: name })
        await delay(1000)
        dispatch({ type: actionType.DECREMENT_COUNT })
        dispatch(asyncActionFinish())
    }
}