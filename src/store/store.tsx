import AsyncStorage from '@react-native-async-storage/async-storage';
import {compose, createStore, applyMiddleware} from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Login from './reducers/login';
import Cart from './reducers/cart';

const config = {
  key: 'Scaling',
  storage: AsyncStorage,
};

const rootReducer = persistCombineReducers(config, {
  login: Login,
  cart: Cart,
});

export type RootState = ReturnType<typeof rootReducer>;

let composeEnhancers = compose;

const configStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger)),
  );

  const persistor = persistStore(store);

  return {persistor, store};
};

export default configStore;
