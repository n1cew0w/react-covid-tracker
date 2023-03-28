import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SelectState {
    selectValue: string

}

const initialState: SelectState = {
    selectValue: '',
}

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        _setSelectValue(state, action) {
            state.selectValue = action.payload
        }
    }
})
export const {_setSelectValue: setSelectValue} = selectSlice.actions

export default selectSlice.reducer;

////////


