import { actionTypes } from "./authConstants"

export const login = (credentials) => {
    return {
        type: actionTypes.LOGIN_USER,
        payload: {
            credentials
        }
    }
}

export const logout = () => {
    return{
        type: actionTypes.SIGN_OUT_USER
    }
};