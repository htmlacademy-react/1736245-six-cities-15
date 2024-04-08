import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../services/constants';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  redirectIfAuth?: string; // Redirect here if user is authenticated
  redirectIfNotAuth?: string; // Redirect here if user is not authenticated
};

const PrivateRoute = ({ children, redirectIfAuth, redirectIfNotAuth }: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

  if (isAuth && redirectIfAuth) {
    return <Navigate to={redirectIfAuth} />;
  }

  if (!isAuth && redirectIfNotAuth) {
    return <Navigate to={redirectIfNotAuth} />;
  }

  return children;
};

export default PrivateRoute;
