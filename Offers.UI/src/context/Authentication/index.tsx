import {createContext, useContext, useReducer} from 'react';
import {IAction} from '../actions';
import {SET_IS_AUTHENTICATED_SUCCESS} from './authentication-constants';

export interface IAuthenticationState {
    /**
     * Whether the user is authenticated or not
     */
    isAuthenticated: boolean
}

interface IAuthenticationSuccess extends IAction {
    type: typeof SET_IS_AUTHENTICATED_SUCCESS;
    value: {
        isAuthenticated: boolean
    };
} 

const initialAuthState: any = {
    isAuthenticated: false,
}

export const AuthContext = createContext(initialAuthState);

type AuthActionTypes = IAuthenticationSuccess;

export const authReducer = (state: IAuthenticationState, action: AuthActionTypes) => {
    switch(action.type) {
        case SET_IS_AUTHENTICATED_SUCCESS:
            return {    
                ...state,                         
                isAuthenticated: action.value.isAuthenticated,
            }
        default: return state;
    }
}

export const AuthStateProvider: React.FC = (props) => {

    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    console.log('AuthState ' + JSON.stringify(authState));

    return (
        <AuthContext.Provider value={{authState, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthState = () => useContext(AuthContext);