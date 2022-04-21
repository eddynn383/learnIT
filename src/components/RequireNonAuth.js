import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireNonAuth = () => {
    const { currentUser } = useAuth()
    const location = useLocation()

    return (
        !currentUser ? <Outlet /> : <Navigate to='/unauthorized' state={{ from: location }} replace />
    )
}

export default RequireNonAuth;