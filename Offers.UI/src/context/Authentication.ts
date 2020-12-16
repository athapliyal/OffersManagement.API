import {createContext, useContext} from 'react';
import {IAction} from './actions';


export interface IAuthenticationState {
    /**
     * Whether the user is authenticated or not
     */
    isAuthenticated: boolean
}

interface IAuthenticationSuccess extends IAction {
    type: "SET_ISAUTHENTICATED_SUCCESS";
    value: boolean;
} 
interface IAuthenticationFail extends IAction {
    type: "SET_ISAUTHENTICATED_FAIL";
    value: boolean;
} 

const initialAuthenticationState: IAuthenticationState = {
    isAuthenticated: false
}

const initialAuthContext: {authState: IAuthenticationState} = {
    authState: initialAuthenticationState
}

export const AuthContext = createContext(initialAuthContext);

type AuthActionTypes = IAuthenticationSuccess | IAuthenticationFail;

export const authReducer = (state: IAuthenticationState, action: AuthActionTypes) => {
    switch(action.type) {
        case 'SET_ISAUTHENTICATED_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'SET_ISAUTHENTICATED_FAIL':
            return {
                ...state,
                isAuthenticated: false
            }
    }
}
export const useAuthState = () => useContext(AuthContext);