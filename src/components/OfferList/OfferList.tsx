import { FC, useState } from 'react';
import type { OfferType } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { Pages } from '../../const';
import { AuthStatus } from '../../authStatus';
import { useSelector } from 'react-redux';
import type { State } from '../../store/types';
<<<<<<< Updated upstream
=======
import { useSort } from '../../hooks/useSort';
import { Spinner } from '../Spinner/Spinner';
>>>>>>> Stashed changes

type OffersTypeProps = {
  authStatus: AuthStatus;
}

export const OfferList: FC<OffersTypeProps> = ({ authStatus }) => {
  const [, setActiveOffer] = useState<string | null>(null);
  const city = useSelector((state: State) => state.city);
  const offers = useSelector((state: State) =>
    state.offers.filter((offer: OfferType) => offer.city.name === city)
  );

  const isOffersLoading = useSelector((state: State) => state.isOffersLoading);

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer: OfferType) => (
        <PlaceCard
          key={offer.id}
          offerData={offer}
          onMouseEnter={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer(null)}
          page={Pages.MAIN}
          authStatus={authStatus}
        />))}
    </div>
  );
};
