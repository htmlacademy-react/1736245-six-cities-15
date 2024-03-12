import Header from '../../components/header/header';
import { CARDS_ON_OFFER } from '../../services/constants';
import NearByCityCard from '../../components/near-by-city-card/near-by-city-card';
import { Helmet } from 'react-helmet-async';
import SingleOffer from '../../components/single-offer/single-offer';


const OfferPage = () => (
  <div className="page">
    <Helmet>
      <title>6 cities. Offer.</title>
    </Helmet>
    <Header/>
    <main className="page__main page__main--offer">
      <SingleOffer/>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {CARDS_ON_OFFER.map((card) => (
              <NearByCityCard card={card} key={card.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default OfferPage;
