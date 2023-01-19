import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import EventReducers from "../../../features/Events/EventReducers";
import testReducer from "../../../features/Test/TestReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: EventReducers
})

export default rootReducer;