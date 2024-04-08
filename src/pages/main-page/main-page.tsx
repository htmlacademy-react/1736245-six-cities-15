import React, { useMemo, useCallback } from 'react';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCityName } from '../../services/utils';
import { changeCity } from '../../store/action';
import { TOffer } from '../../services/types/offers';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

type TMainPageProps = {
  offers: TOffer[];
}

const MainPage = React.memo(({ offers }: TMainPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector((state) => state.cities.city);
  const isLoading = useAppSelector((state) => state.offers.areOffersLoading);

  const cityOffersList = useMemo(() => offers.filter((item) => item.city.name === cityName), [offers, cityName]);

  const handleCityClick = useCallback((isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(changeCity({ city: newCity }));
    }
  }, [dispatch]);

  const mainPageClass = useMemo(() => cityOffersList.length === 0 ? 'page__main page__main--index page__main--index-empty' : 'page page--gray page--main', [cityOffersList]);

  return (
    <div className={mainPageClass}>
      <Helmet><title>6 cities</title></Helmet>
      <Header />
      <main className="page__main page__main--index">
        <CitiesList activeCity={cityName} handleCityClick={handleCityClick} />
        {isLoading ? <LoadingSpinner /> : <OfferListBlock offers={cityOffersList} activeCity={cityName} />}
      </main>
    </div>
  );
});
MainPage.displayName = 'MainPage';

export default MainPage;
