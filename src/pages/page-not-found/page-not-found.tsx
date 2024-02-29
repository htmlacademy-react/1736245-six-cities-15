import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => (
  <div className="page">
    <Helmet>
      <title>6 cities. Page not found.</title>
    </Helmet>
    <Header/>
    <main className="page__main">
      <div className="container">
        <h1>Упс! Ошибка 404! Страница не найдена.</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </main>
  </div>
);

export default PageNotFound;
