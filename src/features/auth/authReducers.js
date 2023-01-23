import { createReducer } from "../../config/common/util/reducerUtil"
import { actionTypes } from "./authConstants"

const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (state, payload) => {
    return {
        authenticated: true,
        currentUser: payload.credentials.email
    }
}

const signOutUser = () => {
    return {
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [actionTypes.LOGIN_USER]: loginUser,
    [actionTypes.SIGN_OUT_USER]: signOutUser
});