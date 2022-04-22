import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireNonAuth = () => {
    const { currentUser } = useAuth()
    // const location = useLocation()
    console.log(currentUser)
    return (
        !currentUser && <Outlet />
    )
}

export default RequireNonAuth;