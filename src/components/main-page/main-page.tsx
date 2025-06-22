import Logo from '../logo/logo';
import { OfferPreviewType } from '../../types/offer-preview';
import OfferList from '../offer-list/offer-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import { CityType } from '../../types/city';
import {useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fillOffersList } from '../../store/action';
import { offers as mockOffers } from '../../mocks/offers';
import Sorting from '../sorting/sorting';
import { sorting } from '../../utils';

type MainPageProps = {
  cities: CityType[];
}

const MainPage = ({cities}: MainPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fillOffersList(mockOffers));
    }
  }, [dispatch, offers]);

  const [activeOffer, setActiveOffer] = useState<OfferPreviewType['id'] | null>(null);

  const selectedCityName = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCityName);
  const selectedCityData = cities.find((city) => city.name === selectedCityName) ?? cities[0];
  const selectedSort = useAppSelector((state) => state.sortOption);
  const sortedOffers = sorting[selectedSort](filteredOffers);

  return (
    <div className="page page--gray page--main">
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
                    <span className="header__favorite-count">3</span>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {selectedCityName}</b>

              <Sorting />
              <OfferList offers={sortedOffers} setActiveOffer={setActiveOffer} block='cities' />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={selectedCityData} offers={filteredOffers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
