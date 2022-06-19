import { FC, ReactNode, useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";

type IAppProps = {
    children: ReactNode;
}

type IAuthContext = {
    isLoggedIn: boolean;
    user: UserObjectType;
    Login: (userObject: UserObjectType) => void;
}

type UserObjectType = {
    status?: string;
    token: string;
    refreshToken?: string;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider: FC<IAppProps> = ({
    children,
}) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(!!localStorage.getItem('user'));
    const [user, setUser] = useState<any>(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") ?? "") || {} : {});

    const Login = (userObject: UserObjectType) => {
        if (userObject) {
            localStorage.setItem("user", JSON.stringify(userObject));
            setLoggedIn(!!localStorage.getItem('user'))
            setUser(userObject);
        }
    }

    const context = {
        isLoggedIn,
        user,
        Login,
    } as IAuthContext;

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};