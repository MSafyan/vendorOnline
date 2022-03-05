import useLoggedIn from '../hooks/useLoggedIn';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
  const { recheck } = useLoggedIn();
  const isLoggedIn = recheck();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return component;
};

export default ProtectedRoute;
