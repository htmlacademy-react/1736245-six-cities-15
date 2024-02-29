import {Navigate} from 'react-router-dom';
import {APP_ROUTE, AuthorizationStatus} from '../../services/constants';

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
  }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={APP_ROUTE.Login} />
  );
}

export default PrivateRoute;
