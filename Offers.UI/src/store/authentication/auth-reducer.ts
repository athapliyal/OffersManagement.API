import { IAction } from '../actions';
import { SET_IS_AUTHENTICATED_SUCCESS } from './auth-constants';

export interface IAuthenticationState {
    isAuthenticated: boolean,
}

interface IAuthenticationSuccess extends IAction {
    type: typeof SET_IS_AUTHENTICATED_SUCCESS;
    value: {
        isAuthenticated: boolean
    };
}

export const authReducer = (state: IAuthenticationState, action: IAuthenticationSuccess) => {
    switch (action.type) {
        case SET_IS_AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.value.isAuthenticated,
            }
        default: return state;
    }
}