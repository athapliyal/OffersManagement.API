import React from 'react';

import {AuthContext, useAuthState} from '../../context/Authentication';

export const AuthStateProvider: React.FC = (props) => {
    const {authState} = useAuthState();
    return (
        <AuthContext.Provider value={{authState}}>
            {props.children}
        </AuthContext.Provider>
    )
}