import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCityName } from '../../services/utils';
import { changeCity } from '../../store/action';


const MainPage = () => {
  const cityName = useAppSelector((state) => state.city);
  const cityOffersList = useAppSelector((state) => state.offers).filter((item) => item.city.name === cityName);
  const dispatch = useAppDispatch();

  const mainPageClass = cityOffersList.length === 0 ? 'page__main page__main--index page__main--index-empty' : 'page page--gray page--main';

  const handleCityClick = (isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(changeCity({city: newCity}));
    }
  };

  return (
    <div className={mainPageClass}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <CitiesList activeCity={cityName} handleCityClick={handleCityClick}/>
        <OfferListBlock offers={cityOffersList} activeCity={cityName}/>
      </main>
    </div>
  );
};

export default MainPage;
