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

// setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
