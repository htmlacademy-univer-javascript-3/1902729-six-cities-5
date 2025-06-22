import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';

const ErrorPage = (): JSX.Element => (
  <div className="page page--favorites-empty">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">0</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--error">
      <div className="page__error-container container">
        <section className="error error--empty">
          <h1 className="visually-hidden">404 Not Found</h1>
          <div style={{
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '100px'
          }} className="error__status-wrapper"
          >
            <b className="error__status">404 Not Found</b>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default ErrorPage;
