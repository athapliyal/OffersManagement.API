import {createContext, useContext} from 'react';
import {IAction} from './actions';
import {SET_IS_AUTHENTICATED_SUCCESS} from './authentication-constants';


export interface IAuthenticationState {
    /**
     * Whether the user is authenticated or not
     */
    isAuthenticated: boolean,
    /** cookie */
    authCooke: string | undefined
}

interface IAuthenticationSuccess extends IAction {
    type: typeof SET_IS_AUTHENTICATED_SUCCESS;
    value: string;
} 

const initialAuthenticationState: IAuthenticationState = {
    isAuthenticated: false,
    authCooke: undefined
}

const initialAuthContext: {authState: IAuthenticationState} = {
    authState: initialAuthenticationState
}

export const AuthContext = createContext(initialAuthContext);

type AuthActionTypes = IAuthenticationSuccess ;

export const authReducer = (state: IAuthenticationState, action: AuthActionTypes) => {
    switch(action.type) {
        case SET_IS_AUTHENTICATED_SUCCESS:
            return {
                ...state,               
                authCookie: action.value,
                isAuthenticated: true,
                
            }
        default: return state;
    }
}
export const useAuthState = () => useContext(AuthContext);