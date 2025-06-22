import { OfferPreviewType } from './types/offer-preview';
import { AppRoute, SortingType } from './const';

function getFavorites(favorites:OfferPreviewType[]) {
  return favorites.reduce<{ [key: string]: OfferPreviewType[] }>((acc, curr) => {
    const city = curr.city.name;
    if(!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);
    return acc;
  }, {});
}

function getOfferLink(id:string) {
  return `${AppRoute.Offer}/${id}`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

function getRatingWidth(rating: number): string {
  return `${(rating / 5) * 100}%`;
}

function sortByRating(a: OfferPreviewType, b: OfferPreviewType) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: OfferPreviewType, b: OfferPreviewType) {
  return a.price - b.price;
}

function sortHighToLow(a: OfferPreviewType, b: OfferPreviewType) {
  return b.price - a.price;
}

const sorting: Record<SortingType, (offers: OfferPreviewType[]) => OfferPreviewType[]> = {
  [SortingType.Popular]: (offers) => offers ,
  [SortingType.LowToHigh]: (offers) => offers.toSorted(sortLowToHigh),
  [SortingType.HighToLow]: (offers) => offers.toSorted(sortHighToLow),
  [SortingType.TopRated]: (offers) => offers.toSorted(sortByRating),
};

export {getFavorites, getOfferLink, formatDate, getRatingWidth, sorting};
