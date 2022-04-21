import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    // console.log(allowedRoles)

    // console.log(currentUser)

    const test = () => {
        return currentUser.roles
    }

    // console.log(test())

    // console.log(currentUser?.roles?.find(role => allowedRoles?.includes(role)))

    return (
        // currentUser?.roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : currentUser
        //         ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
        currentUser
            ? <Outlet />
            : <Navigate to="/signin" state={{ from: location }} replace />
    );
}

export default RequireAuth;