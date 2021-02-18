import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Campsites} from "./campsites";
import { Comments} from "./comments";
import { Promotions, Promtions} from "./promotions";
import { Partners} from "./parterns";
import CampsiteInfo from "../components/CampsiteInfoComponent";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers ({
        campsites: Campsites,
        comments: Comments,
        partners: Partners,
        promotions: Promotions,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};