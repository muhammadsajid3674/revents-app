import { composeWithDevTools } from "@redux-devtools/extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { applyMiddleware, createStore } from "redux"
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../../Firebase/FirebaseConfig";
import rootReducer from "../Reducer/rootReducer";

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
};

const configureStore = () => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares), reactReduxFirebase(firebase, rrfConfig), reduxFirestore(firebase))

    const store = createStore(rootReducer, composeEnhancer)

    return store;
}

export default configureStore;