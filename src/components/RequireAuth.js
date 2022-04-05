import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

const RequireAuth = ({ allowedRoles }) => {
    const { currentUser, currentRole } = useAuth()
    const location = useLocation()

    console.log(currentRole)
    console.log(allowedRoles)

    return (
        currentRole?.find(role => {
            allowedRoles?.includes(role)
            console.log(role)
        })
            ? <Outlet />
            : currentUser
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/signin" state={{ from: location }} replace />
    )
}

export default RequireAuth;