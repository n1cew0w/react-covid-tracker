import {createSelector} from "@reduxjs/toolkit";

const selector = (state) => state

export const selectValue = createSelector(selector, (state) => state.searchValue)