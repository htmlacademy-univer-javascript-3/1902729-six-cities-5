import { SortingType } from '../../const';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortOption } from '../../store/action';

const sortingOptions = Object.values(SortingType);

const Sorting = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedSort = useAppSelector((state) => state.sortOption);

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SortingType) => {
    if (option !== selectedSort) {
      dispatch(setSortOption(option));
    }
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen((prev) => !prev)}>
        { selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortingOptions.map((option) => (
          <li key={option} className={`places__option ${selectedSort === option ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => handleOptionClick(option)} >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sorting;
