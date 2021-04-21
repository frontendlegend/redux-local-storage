import {createStore} from 'redux';
import {loadState, saveState} from './localStorage';
import userData from './reducers';

const persistedState = loadState();
const store = createStore(
  userData,
  persistedState
);

store.subscribe(() => {
  saveState({
    loggedInOut: store.getState().loggedInOut,
    formCollected: store.getState().formCollected
  });
});

export default store;