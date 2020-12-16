import React from 'react';

import {AuthContext, useAuthState} from '../../context/Authentication';

export const AuthStateProvider: React.FC = (props) => {
    const {authState} = useAuthState();
    return (
        <AuthContext.Provider value={{authState}}>
            {
                authState.isAuthenticated === true 
                ? (props.children) 
                : null
            }
        </AuthContext.Provider>
    )
}