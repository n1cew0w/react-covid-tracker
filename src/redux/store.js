import {configureStore} from "@reduxjs/toolkit";
import {covidApi} from "./api/covidApi";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [covidApi.reducerPath]: covidApi.reducer
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(covidApi.middleware),
})

setupListeners(store.dispatch)
