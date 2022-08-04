import { useReducer } from "react";
import { TOGGLE_LOGIN } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                loggedIn: !state.loggedIn
            };
        default:
            return state;
    }
};

// useReducer hook is meant specifically for managing greater level of state
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}