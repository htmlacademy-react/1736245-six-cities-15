import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { getRandomCity } from '../../services/utils';
import { AppRoute } from '../../services/constants';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { login } from '../../store/thunks/user';
import { AuthorizationStatus } from '../../services/constants';

const LoginPage = () => {
  const city = getRandomCity();
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
      if (authStatus === AuthorizationStatus.Auth) {
        navigate(AppRoute.Main);
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login.</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
