import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import rootReducer from "../Reducer/rootReducer";

const configureStore = () => {
    const middlewares = [thunk];

    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(rootReducer, composeEnhancer)

    return store;
}

export default configureStore;