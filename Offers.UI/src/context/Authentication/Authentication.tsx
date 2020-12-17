import {createContext, useContext, useReducer} from 'react';
import {IAction} from '../actions';
import {SET_IS_AUTHENTICATED_SUCCESS} from './authentication-constants';


export interface IAuthenticationState {
    /**
     * Whether the user is authenticated or not
     */
    isAuthenticated: boolean,
    /** cookie */
    authCookie: string,

    setAuthState: () => void
}

interface IAuthenticationSuccess extends IAction {
    type: typeof SET_IS_AUTHENTICATED_SUCCESS;
    value: {
        authCookie: string,
        isAuthenticated: boolean
    };
} 

const initialAuthState: IAuthenticationState = {
    isAuthenticated: false,
    authCookie: "",
    setAuthState: () => {}
}

const initialContext: {authState: IAuthenticationState} = {
    authState: initialAuthState
}

export const AuthContext = createContext(initialAuthState);

type AuthActionTypes = IAuthenticationSuccess;

export const authReducer = (state: IAuthenticationState, action: AuthActionTypes) => {
    switch(action.type) {
        case SET_IS_AUTHENTICATED_SUCCESS:
            return {    
                ...state,         
                authCookie: action.value.authCookie,
                isAuthenticated: action.value.isAuthenticated,
            }
        default: return state;
    }
}

export const AuthStateProvider: React.FC = (props) => {
    const authState = useAuthState();
    return (
        <AuthContext.Provider value={authState}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthState = () => useContext(AuthContext);