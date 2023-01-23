import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import authReducers from "../../../features/auth/authReducers";
import EventReducers from "../../../features/Events/EventReducers";
import ModalReducers from "../../../features/Modals/ModalReducers";
import testReducer from "../../../features/Test/TestReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: EventReducers,
    modals: ModalReducers,
    auth: authReducers
})

export default rootReducer;