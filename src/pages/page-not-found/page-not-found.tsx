import React from 'react';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type TPageNotFoundProps = {
  isOffer: boolean;
}

const PageNotFound = React.memo(({ isOffer = false }: TPageNotFoundProps): JSX.Element => (
  <div className="page">
    <Helmet>
      <title>6 cities. Page not found.</title>
    </Helmet>
    <Header />
    <main className="page__main">
      <div className="container">
        {isOffer ? <h1>Упс! Такого предложения не существует</h1> : <h1>Упс! Ошибка 404! Страница не найдена.</h1>}
        <Link to="/">Вернуться на главную</Link>
      </div>
    </main>
  </div>
));
PageNotFound.displayName = 'PageNotFound';
export default PageNotFound;
