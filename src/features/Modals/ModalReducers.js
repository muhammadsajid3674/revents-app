import { createReducer } from "../../config/common/util/reducerUtil";
import { actionType } from "./ModalConstants";

const initialState = null;

const openModal = (state, payload) => {
    const { modalProps, modalType } = payload;
    return {
        modalType,
        modalProps
    }
}

const closeModal = (state) => {
    return null;
}

export default createReducer(initialState, {
    [actionType.MODAL_OPEN]: openModal,
    [actionType.MODAL_CLOSE]: closeModal,
})