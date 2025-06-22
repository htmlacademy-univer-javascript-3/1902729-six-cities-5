import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import leaflet from 'leaflet';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27,39],
  iconAnchor: [13, 39],
});

export {currentCustomIcon, defaultCustomIcon};
