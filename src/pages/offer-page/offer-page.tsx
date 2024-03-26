import Header from '../../components/header/header';
import { MAX_NEAREST_OFFERS_COUNT, SIZES} from '../../services/constants';
import { Helmet } from 'react-helmet-async';
import SingleOffer from '../../components/single-offer/single-offer';
import { Offers } from '../../mocks/offers';
import OfferCard from '../../components/offer-card/offer-card';


const OfferPage = () => {
  const offer = Offers[0];
  const offerCount = Offers.slice(0, MAX_NEAREST_OFFERS_COUNT);
  const nearbyOffers = Offers.length < offerCount.length ? Offers : offerCount;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer.</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <SingleOffer offer={offer} nearbyOffers={nearbyOffers}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offerItem) => (
                <OfferCard offer={offerItem} prefixClass={'near-places'} key={offerItem.id} cardSizes={SIZES.offers}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
export default OfferPage;

