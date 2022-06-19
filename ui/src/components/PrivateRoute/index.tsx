/*
import { Redirect, Route } from "react-router-dom";
// @ts-ignore
import { useAuth } from '@/hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;

*/

export { };