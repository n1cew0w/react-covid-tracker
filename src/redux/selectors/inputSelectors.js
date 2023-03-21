import {createSelector} from "@reduxjs/toolkit";

const selector = (state) => state

export const searchSelector = createSelector(selector, (state) => state.searchValue)