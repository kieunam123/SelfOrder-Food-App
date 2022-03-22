import React, {createContext, useReducer} from "react";
export const Store = createContext();

const initialState = { 
    order:
    {
        orderType: 'Eat in',
    },
};

function reducer(state, action){
    switch(action.type){
        case ORDER_SET_TYPE:
            ...state,
            order: {...state.order, orderType: action.payload },
    };
    default:
        return state;
}

}