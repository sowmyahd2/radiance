import { combineReducers  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ParlourdetailReducer from '../redux/parlourdetailSlice';
import CategoryReducer from '../redux/categorySlice';
//const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootReducer = combineReducers({
  parlourdetail: ParlourdetailReducer,
  category: CategoryReducer,
});

export default rootReducer;