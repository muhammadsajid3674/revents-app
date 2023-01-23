import { actionType } from "./ModalConstants"

export const openModal = (modalType, modalProps) => {
    return {
        type: actionType.MODAL_OPEN,
        payload: {
            modalType,
            modalProps
        }
    }
}

export const closeModal = () => {
    return {
        type: actionType.MODAL_CLOSE
    }
}