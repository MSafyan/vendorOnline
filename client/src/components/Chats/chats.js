import dayjs from 'dayjs';

const chats = [
  {
    id: 1,
    users: [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ],
    messages: [
      {
        id: 1,
        text: 'Hello',
        createdAt: dayjs().subtract(4, 'hours').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 2,
        text: 'Hi',
        createdAt: dayjs().subtract(3, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 3,
        text: 'How are you? How are you? How are you? How are you?',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 4,
        text: 'How are you? How are you? How are you? How are you?',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 5,
        text: 'I am fine',
        createdAt: dayjs().subtract(1, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 6,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 7,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 8,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
      {
        id: 9,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 1,
          name: 'John Doe',
        },
      },
    ],
  },
  {
    id: 2,
    users: [
      {
        id: 3,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ],
    messages: [
      {
        id: 1,
        text: 'Hello',
        createdAt: dayjs().subtract(4, 'hours').toDate(),
        sender: {
          id: 3,
          name: 'John Doe',
        },
      },
      {
        id: 2,
        text: 'Hi',
        createdAt: dayjs().subtract(3, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 3,
        text: 'How are you?',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
        sender: {
          id: 3,
          name: 'John Doe',
        },
      },
      {
        id: 4,
        text: 'I am fine',
        createdAt: dayjs().subtract(1, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 5,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 3,
          name: 'John Doe',
        },
      },
    ],
  },
  {
    id: 3,
    users: [
      {
        id: 4,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ],
    messages: [
      {
        id: 1,
        text: 'Hello',
        createdAt: dayjs().subtract(4, 'hours').toDate(),
        sender: {
          id: 4,
          name: 'John Doe',
        },
      },
      {
        id: 2,
        text: 'Hi',
        createdAt: dayjs().subtract(3, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 3,
        text: 'How are you?',
        createdAt: dayjs().subtract(2, 'hours').toDate(),
        sender: {
          id: 4,
          name: 'John Doe',
        },
      },
      {
        id: 4,
        text: 'I am fine',
        createdAt: dayjs().subtract(1, 'hours').toDate(),
        sender: {
          id: 2,
          name: 'Jane Doe',
        },
      },
      {
        id: 5,
        text: 'What about you?',
        createdAt: dayjs().subtract(30, 'minutes').toDate(),
        sender: {
          id: 4,
          name: 'John Doe',
        },
      },
    ],
  },
];

export default chats;
