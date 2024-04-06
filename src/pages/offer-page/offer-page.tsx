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
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';


const OfferPage = () => {
  const dispatch = useAppDispatch();
  const isOfferFetched = useAppSelector((state) => state.currentOffer.isOfferFetched);
  const isNearByFetched = useAppSelector((state) => state.currentOffer.isNearByFetched);
  const areReviewsFetched = useAppSelector((state) => state.reviews.areReviewsFetched);
  const { id: currentId } = useParams();
  const currentOffer = useAppSelector((state) => state.currentOffer.currentOffer);
  const nearByOffers = useAppSelector((state) => state.currentOffer.nearByOffers);
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const navigate = useNavigate();
  const nearByOffersCut = nearByOffers.slice(0, MAX_NEAREST_OFFERS_COUNT);

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

  // if (!currentOffer) {
  //   navigate(AppRoute.Main);
  // }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer.</title>
      </Helmet>
      <Header/>
      {isOfferFetched && isNearByFetched && areReviewsFetched ? (
        <main className="page__main page__main--offer">
          <SingleOffer offer={currentOffer} reviews={reviews} />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearByOffersCut.map((offerItem) => (
                  <OfferCard offer={offerItem} prefixClass={'near-places'} key={offerItem.id} cardSizes={SIZES.offers} />
                ))}
              </div>
            </section>
          </div>
        </main>
      ) : <LoadingSpinner />}
    </div>
  );
};
export default OfferPage;

