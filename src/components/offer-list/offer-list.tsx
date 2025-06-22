import Card from '../card/card';
import { OfferPreviewType } from '../../types/offer-preview';

type OfferListProps = {
  offers: OfferPreviewType[];
  setActiveOffer:(id: OfferPreviewType['id'] | null) => void;
  block: string;
}

const OfferList = ({offers, setActiveOffer, block}: OfferListProps): JSX.Element => (
  <div className={`${block === 'near' ? 'near-places__list' : `${block}__places-list`} places__list tabs__content`}>
    {offers.map((offer) => (
      <Card key={offer.id} offer={offer} block={block} onCardHover={setActiveOffer} />
    ))}
  </div>
);
export default OfferList;
