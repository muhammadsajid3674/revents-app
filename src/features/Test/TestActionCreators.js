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