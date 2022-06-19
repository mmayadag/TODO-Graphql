import { FC, useContext, ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '@/context/authContext';

type PrivateRouteProps = {
    children: ReactNode | JSX.Element | null;
}
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const { user } = useContext(AuthContext);

    return !user.token ? <Navigate to="/login" replace /> : <>{children}</>;
}

export default PrivateRoute;
