import { CityName } from '../const';
import { CityType } from '../types/city';

const cities: CityType[] = [
  { name: CityName.Paris,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10
    }
  },
  { name: CityName.Cologne,
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    }
  },
  { name: CityName.Brussels,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 11
    }
  },
  { name: CityName.Amsterdam,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 10
    }
  },
  { name: CityName.Hamburg,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    }
  },
  { name: CityName.Dusseldorf,
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10
    }
  },
];

export {cities};
