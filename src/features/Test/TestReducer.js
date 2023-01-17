import { createReducer } from "../../config/common/util/reducerUtil";
import actionType from "./TestAction";

const initialState = {
    data: 45
}

const incrementCount = (state) => {
    return { ...state, data: state.data + 1 };
}
const decrementCount = (state) => {
    return { ...state, data: state.data - 1 };
}

export default createReducer(initialState, {
    [actionType.INCREMENT_COUNT] : incrementCount,
    [actionType.DECREMENT_COUNT] : decrementCount,
});