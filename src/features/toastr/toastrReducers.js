import { actionType } from "./toastrConstants";
import { createReducer } from "../../config/common/util/reducerUtil";

const initialState = null;

const openToastr = (state, payload) => {
    const { toastrProps, toastrType } = payload;
    return {
        toastrType,
        toastrProps,
    }
}

const closeToastr = () => {
    return null;
}

export default createReducer(initialState, {
    [actionType.TOASTR_OPEN]: openToastr,
    [actionType.TOASTR_CLOSE]: closeToastr
})