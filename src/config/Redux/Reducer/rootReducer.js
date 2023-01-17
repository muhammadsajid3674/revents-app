import { combineReducers } from "redux";
import EventReducers from "../../../features/Events/EventReducers";
import testReducer from "../../../features/Test/TestReducer";

const rootReducer = combineReducers({
    test: testReducer,
    events: EventReducers
})

export default rootReducer;