import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { reducer as FormReducer } from 'redux-form';
import asyncReducers from "../../../features/async/asyncReducers";
import authReducers from "../../../features/auth/authReducers";
import EventReducers from "../../../features/Events/EventReducers";
import ModalReducers from "../../../features/Modals/ModalReducers";
import testReducer from "../../../features/Test/TestReducer";
import toastrReducers from "../../../features/toastr/toastrReducers";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: EventReducers,
    modals: ModalReducers,
    toastr: toastrReducers,
    auth: authReducers,
    async: asyncReducers,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;