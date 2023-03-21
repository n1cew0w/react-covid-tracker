import {createSelector, createSlice} from "@reduxjs/toolkit";


const initialState = {
    selectValue: '',
}

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectValue: (state, action) => {
            state.selectValue = action.payload
        }
    }
})
 export const {setSelectValue} = selectSlice.actions
export default selectSlice.reducer;

////////


