import { closeModal } from "../Modals/ModalActions"
import { actionTypes } from "./authConstants"

export const login = (credentials) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGIN_USER,
            payload: {
                credentials
            }
        })
        dispatch(closeModal())
    }
}

export const logout = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
};