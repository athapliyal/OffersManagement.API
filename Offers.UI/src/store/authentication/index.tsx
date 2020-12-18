import { useContext, useReducer } from 'react';

import { authReducer } from './auth-reducer';
import { AuthContext, initialAuthState } from './auth-context'; 

export const AuthStateProvider: React.FC = (props) => {
    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthState = () => useContext(AuthContext);