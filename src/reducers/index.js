import { combineReducers } from 'redux';
import app from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  routing: routerReducer
});

export default rootReducer;
