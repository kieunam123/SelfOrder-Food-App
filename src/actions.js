import { ORDER_SET_TYPE, CATEGORY_LIST_REQUEST, CATEROGY_LIST_FAIL, CATEROGY_LIST_SUCCESS} from "./constants";
import Axios from 'axios';

export const setOrderType = ( dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload:  orderType,
    });
};

export const listCategories = async (dispatch) => {
    dispatch({type: CATEGORY_LIST_REQUEST});
    try{
        const{data}=await Axios.get('/api/categories');
        return dispatch({
            type: CATEROGY_LIST_SUCCESS,
            payload: data,
        });
    } catch(error){
        return dispatch({
            type: CATEROGY_LIST_FAIL,
            payload: error.message,
        });
    }

}