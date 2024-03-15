import Header from '../../components/header/header';
import { CITIES } from '../../services/constants';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../services/types/offers';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';

type TPlacesToStay = {
    offers: TOffer[];
  };

const MainPage = ({offers}: TPlacesToStay) => (
  <div className="page page--gray page--main">
    <Helmet>
      <title>6 cities</title>
    </Helmet>
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            { CITIES.map((title: string) => (
              <li className="locations__item" key={title}>
                <a className="locations__item-link tabs__item" href="#">
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <OfferListBlock offers={offers} />
      </div>
    </main>
  </div>
);

export default MainPage;
