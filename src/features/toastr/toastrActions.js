import { actionType } from "./toastrConstants"

export const openToastr = (toastrType, toastrProps) => {
    return {
        type: actionType.TOASTR_OPEN,
        payload: {
            toastrType,
            toastrProps
        }
    }
}

export const closeToastr = () => {
    return {
        type: actionType.TOASTR_CLOSE
    }
}