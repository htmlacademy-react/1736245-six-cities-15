import { TOffer } from '../../services/types/offers';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites/favorites-empty';

type TFavoritesProps = {
  offers: TOffer[];
}

const Favorites = ({offers}: TFavoritesProps) => {
  const emptyMainClass = offers ? '' : ' page__main--favorites-empty';
  const emptySectionClass = offers ? '' : ' page__main--favorites-empty';
  const title = offers ? 'Saved listing' : 'Favorites (empty)';
  const headerClass = offers ? 'favorites__title' : 'visually-hidden';
  return (
    <main className={`page__main page__main--favorites${emptyMainClass}`}>
      <div className="page__favorites-container container">
        <section className={`favorites${emptySectionClass}`}>
          <h1 className={headerClass}>{title}</h1>
          {offers ? <FavoritesList offerList={offers}/> : <FavoritesEmpty/>}
        </section>
      </div>
    </main>
  );
};

export default Favorites;
