import { openToastr } from "../toastr/toastrActions";

export const updateProfile = (user) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user;
        try {
            await firebase.updateProfile(updatedUser)
            dispatch(openToastr('Toastr', { severity: 'success', message: 'Your profile has been updated' }))
        } catch (error) {
            console.log(error);
        }
    }
}