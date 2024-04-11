import Header from '../../components/header/header';
import { MAX_NEAREST_OFFERS_COUNT, SIZES} from '../../services/constants';
import { Helmet } from 'react-helmet-async';
import SingleOffer from '../../components/single-offer/single-offer';
import OfferCard from '../../components/offer-card/offer-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCurrentOffer, fetchNearByOffers, fetchReviews } from '../../store/thunks/offers';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import PageNotFound from '../page-not-found/page-not-found';


const OfferPage = React.memo((): JSX.Element => {
  const dispatch = useAppDispatch();
  const isOfferFetched = useAppSelector((state) => state.currentOffer.isOfferFetched);
  const isNearByFetched = useAppSelector((state) => state.currentOffer.isNearByFetched);
  const areReviewsFetched = useAppSelector((state) => state.reviews.areReviewsFetched);
  const { id: currentId } = useParams();
  const currentOffer = useAppSelector((state) => state.currentOffer.currentOffer);
  const nearByOffers = useAppSelector((state) => state.currentOffer.nearByOffers);
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const nearByOffersCut = useMemo(() => nearByOffers.slice(0, MAX_NEAREST_OFFERS_COUNT), [nearByOffers]);

  useEffect(() => {
    if (!currentOffer && currentId) {
      dispatch(fetchCurrentOffer(currentId));
      dispatch(fetchNearByOffers(currentId));
      dispatch(fetchReviews(currentId));
    } else if (currentId && currentOffer && currentId !== currentOffer?.id) {
      dispatch(fetchCurrentOffer(currentId));
      dispatch(fetchNearByOffers(currentId));
      dispatch(fetchReviews(currentId));
    }
  }, [dispatch, currentId, currentOffer]);

  if (!currentOffer) {
    return <PageNotFound isOffer />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer.</title>
      </Helmet>
      <Header />
      {isOfferFetched && isNearByFetched && areReviewsFetched ? (
        <main className="page__main page__main--offer">
          {currentOffer && <SingleOffer nearByOffers={nearByOffersCut} offer={currentOffer} reviews={reviews} />}
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
});
OfferPage.displayName = 'OfferPage';

export default OfferPage;
