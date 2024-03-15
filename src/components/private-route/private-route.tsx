import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../services/constants';

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
    reverseOperation?: boolean;
  }

function PrivateRoute({children, authorizationStatus, reverseOperation = false}: PrivateRouteProps): JSX.Element {
  const condition = reverseOperation ? authorizationStatus !== AuthorizationStatus.Auth : authorizationStatus === AuthorizationStatus.Auth;
  return (
    condition ? children : <Navigate to={AppRoute.Main}/>
  );
}

export default PrivateRoute;
