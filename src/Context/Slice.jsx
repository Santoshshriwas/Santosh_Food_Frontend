
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productslice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, productReducer)

const store= configureStore({

     reducer:{
         addtocart: persistedReducer,
     }
})
export const persistor = persistStore(store);
export default store;