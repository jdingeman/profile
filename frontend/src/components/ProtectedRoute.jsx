import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        // User not authenticated
        return <Navigate to='/login' />
    }
    return children;
};