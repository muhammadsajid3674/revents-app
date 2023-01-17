import { combineReducers } from "redux";
import testReducer from "../../../features/Test/TestReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;