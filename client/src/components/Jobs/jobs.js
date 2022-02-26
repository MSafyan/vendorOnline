import dayjs from 'dayjs';

const jobs = [
  {
    id: 1,
    title: 'Plumbing Services',
    price: 100,
    reviews: [
      {
        id: 1,
        rating: 5,
      },
    ],
    company: 'Plumbing Inc.',
    createdAt: dayjs().subtract(4, 'hours').toDate(),
  },
  {
    id: 2,
    title: 'Plumbing Services',
    price: 100,
    reviews: [
      {
        id: 1,
        rating: 5,
      },
    ],
    company: 'Plumbing Inc.',
    createdAt: dayjs().subtract(4, 'hours').toDate(),
  },
  {
    id: 3,
    title: 'Plumbing Services',
    price: 100,
    reviews: [
      {
        id: 1,
        rating: 5,
      },
    ],
    company: 'Plumbing Inc.',
    createdAt: dayjs().subtract(4, 'hours').toDate(),
  },
  {
    id: 4,
    title: 'Plumbing Services',
    price: 100,
    reviews: [
      {
        id: 1,
        rating: 5,
      },
    ],
    company: 'Plumbing Inc.',
    createdAt: dayjs().subtract(4, 'hours').toDate(),
  },
  {
    id: 5,
    title: 'Plumbing Services',
    price: 100,
    reviews: [
      {
        id: 1,
        rating: 5,
      },
    ],
    company: 'Plumbing Inc.',
    createdAt: dayjs().subtract(4, 'hours').toDate(),
  },
];

export default jobs;
