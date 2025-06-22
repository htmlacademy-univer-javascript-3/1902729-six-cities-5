import { ReviewType } from '../types/review';

const reviews: ReviewType[] = [
  {
    id: '7d24d2d7-8d8b-41cf-875b-6786a9ac3e32',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Oliver Conner'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '8c1e2a0e-3490-4f72-92c9-d80b9512f098',
    date: '2023-11-15T10:45:32.123Z',
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Sophia Williams'
    },
    comment: 'A vibrant, lively neighborhood near the bustling heart of the city, where the energy of local cafes and street art blend perfectly.',
    rating: 5
  },
  {
    id: '20e89a72-5b2b-4d74-90a7-92db6489d4fa',
    date: '2022-07-21T18:30:48.987Z',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Liam Johnson'
    },
    comment: 'A peaceful corner away from the hustle and bustle, offering a perfect blend of nature and modern life with stunning views.',
    rating: 4
  },
  {
    id: '2f0a426d-8313-4b45-8b1b-b0e2a2d5bfe6',
    date: '2024-01-09T12:15:03.456Z',
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Emma Davis'
    },
    comment: 'A secluded spot in the city, surrounded by lush greenery and a tranquil lake, offering the perfect escape for anyone seeking peace.',
    rating: 5
  }
];

export {reviews};
