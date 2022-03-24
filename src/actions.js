import { ORDR_SET_TYPE } from "./constants";

export const setOrderType = ( dispatch, orderType) => {
    return dispatch({
        type: ORDR_SET_TYPE,
        payload:  orderType,
    });
};