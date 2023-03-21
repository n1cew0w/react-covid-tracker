import {createSelector} from "@reduxjs/toolkit";

const selector = (state) => state

export const selectSelector = createSelector(selector, (state) => state.selectValue)