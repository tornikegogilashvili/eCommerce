import { Navigate } from "react-router-dom"

export const ProtectedRoute = ( {children, isAdmin} )=>{
    if (!isAdmin) {
        return <Navigate to="/" />
    }
    return children
}