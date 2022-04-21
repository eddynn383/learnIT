import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    return (
        currentUser?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : currentUser
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;