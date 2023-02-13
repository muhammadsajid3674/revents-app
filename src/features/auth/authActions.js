import { closeModal } from "../Modals/ModalActions"
import { reset, SubmissionError } from 'redux-form';

export const login = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
            await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            dispatch(closeModal())
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, '')
            })
        }
    }
}

export const registerUser = user => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let createUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            console.log(createUser);
            await createUser.user.updateProfile({
                displayName: user.displayName
            })
            let newUser = {
                displayName: user.displayName,
                createdAt: firestore.FieldValue.serverTimestamp()
            };
            await firestore.set(`users/${createUser.user.uid}`, { ...newUser })
            dispatch(closeModal())
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, '')
            })
        }
    }
}

export const socialLogin = (selectedProvider) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            dispatch(closeModal());
            let socialUser = await firebase.login({
                provider: selectedProvider,
                type: 'popup'
            });
            if (socialUser.additionalUserInfo.isNewUser) {
                const newUser = {
                    displayName: socialUser.user.displayName,
                    photoURL: socialUser.user.photoURL,
                    createdAt: firestore.FieldValue.serverTimestamp()
                }
                await firestore.set(`users/${socialUser.user.uid}`, { ...newUser })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const changePassword = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const currentUser = firebase.auth().currentUser
        try {
            await currentUser.updatePassword(credentials.newPassword1)
            await dispatch(reset('account'))
            await firebase.logout()
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message
            })
        }
    }
}