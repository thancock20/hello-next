import { createStore } from 'easy-peasy';

const store = createStore({
  counter: {
    count: 0,
    increment: draft => { draft.count++ },
    decrement: draft => { draft.count-- }
  }
});

export default store;
