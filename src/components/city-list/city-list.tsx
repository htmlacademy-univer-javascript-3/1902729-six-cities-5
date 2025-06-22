import { useAppDispatch, useAppSelector } from '../../hooks';
import City from '../city/city';
import { changeCity } from '../../store/action';
import { CityType } from '../../types/city';
import { useCallback } from 'react';
import { CityName } from '../../const';

type CityListProps = {
  cities: CityType[];
};

const CityList = ({cities}: CityListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  const handleCityClick = useCallback(
    (cityName: CityName) => dispatch(changeCity(cityName)),
    [dispatch]
  );

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City city={city} key={city.name} isActive={city.name === currentCity} onClick={handleCityClick} />
      ))}
    </ul>
  );
};
export default CityList;
