import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import asyncReducers from "../../../features/async/asyncReducers";
import authReducers from "../../../features/auth/authReducers";
import EventReducers from "../../../features/Events/EventReducers";
import ModalReducers from "../../../features/Modals/ModalReducers";
import testReducer from "../../../features/Test/TestReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: EventReducers,
    modals: ModalReducers,
    auth: authReducers,
    async: asyncReducers
})

export default rootReducer;