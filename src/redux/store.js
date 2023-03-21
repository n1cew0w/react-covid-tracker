import {configureStore} from "@reduxjs/toolkit";
import {covidApi} from "./api/covidApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import searchSlice from "./slices/searchSlice";
import selectSlice from "./slices/selectSlice";


export const store = configureStore({
    reducer: {
        searchSlice,
        selectSlice,
        [covidApi.reducerPath]: covidApi.reducer,

    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(covidApi.middleware),
})

setupListeners(store.dispatch)
