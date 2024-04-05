import Header from '../../components/header/header';
import { MAX_NEAREST_OFFERS_COUNT, SIZES, AppRoute} from '../../services/constants';
import { Helmet } from 'react-helmet-async';
import SingleOffer from '../../components/single-offer/single-offer';
// import { Offers } from '../../mocks/offers';
import OfferCard from '../../components/offer-card/offer-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCurrentOffer, fetchNearByOffers, fetchReviews } from '../../store/thunks/offers';


const OfferPage = () => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers.offers);
  // const isLoading = useAppSelector((state) => state.offers.areOffersFetched);
  const { id: currentId } = useParams();
  const offer = offers[0];
  const offerCount = offers.slice(0, MAX_NEAREST_OFFERS_COUNT);
  //const nearbyOffers = offers.length < offerCount.length ? offers : offerCount;

  const currentOffer = useAppSelector((state) => state.currentOffer.currentOffer);
  const nearByOffers = useAppSelector((state) => state.currentOffer.nearByOffers);
  const reviews = useAppSelector((state) => state.currentOffer.reviews);
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const navigate = useNavigate();

  useEffect(()=> {
    if (!currentOffer && currentId) {
      dispatch(fetchCurrentOffer(currentId));
      dispatch(fetchNearByOffers(currentId));
      dispatch(fetchReviews(currentId));
    } else if (currentId && currentOffer && currentId !== currentOffer?.id) {
      dispatch(fetchCurrentOffer(currentId));
      dispatch(fetchNearByOffers(currentId));
      dispatch(fetchReviews(currentId));
    }
  },[dispatch, currentId, currentOffer]);

  if (!currentOffer) {
    navigate(AppRoute.Main);
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer.</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <SingleOffer />
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

