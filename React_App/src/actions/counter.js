import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    increment: null,
    decrement: null
  },
  {
    prefix: 'COUNTER/'
  }
);

const { increment, decrement } = Creators;

const { INCREMENT, DECREMENT } = Types;

export { increment, decrement, INCREMENT, DECREMENT };
