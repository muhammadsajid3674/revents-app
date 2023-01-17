import actionType from "./TestAction";

const initialState = {
    data: 45
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT_COUNT:
            return { ...state, data: state.data + 1 };

        case actionType.DECREMENT_COUNT:
            return { ...state, data: state.data - 1 };

        default:
            return state;
    }
}

export default testReducer;