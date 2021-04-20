import {createStore} from 'redux';
import {loadState, saveState} from './localStorage';
import loggedInOut from './reducers/log';

const persistedState = loadState();
const store = createStore(
  loggedInOut,
  persistedState
);

store.subscribe(() => {
  saveState({
    loggedIn: store.getState().loggedIn
  });
});

export default store;