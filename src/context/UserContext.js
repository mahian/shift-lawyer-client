import React, { createContext } from 'react';

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const authInfo = {name: 'mahian ahmad'}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;