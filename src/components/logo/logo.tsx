import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../../services/constants';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link" to={ APP_ROUTE.Main }>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
