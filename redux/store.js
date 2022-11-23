import { configureStore } from "@reduxjs/toolkit";

import cartreducer from "./slice"
import storage from "redux-persist/lib/storage";


import {persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persisitconfig={
    key:"root",
    version:1,
    storage

}
const reducer=combineReducers({
    cart:cartreducer
})

const persistedReducer=persistReducer(persisitconfig,reducer)

export const store =configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})