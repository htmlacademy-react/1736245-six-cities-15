import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../services/types/offers';
import Favorites from '../../components/favorites/favorites';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../services/constants';

type TFavoritesProps = {
  offers: TOffer[];
}

const FavoritesPage = ({offers}: TFavoritesProps) => (
  <div className="page">
    <Helmet>
      <title>Шесть городов. Избранное</title>
    </Helmet>
    <Header />
    <Favorites offers={offers} />
    <footer className={offers ? 'footer container' : 'footer'}>
      <Link to={AppRoute.Main} className="footer__logo-link">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  </div>
);

export default FavoritesPage;
