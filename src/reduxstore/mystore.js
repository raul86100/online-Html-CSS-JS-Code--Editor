import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { cssReducer, htmlReducer, jsReducer } from "./reduxhtml";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import { useState } from 'react';
//import cssreducerReducer from "./reduxhtml"

const persistconfig = {
  key: "root",
  version: "1",
  storage,
};

const reducerp = combineReducers({
  reduxhtml: htmlReducer,
  reduxcss: cssReducer,
  reduxjs: jsReducer,
});
const persistreducer = persistReducer(persistconfig, reducerp);

export const mystore = configureStore({
  reducer: persistreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
