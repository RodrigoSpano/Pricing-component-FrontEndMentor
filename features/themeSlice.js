import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: true,
}

const themeSlice = createSlice({
  name:'theme',
  initialState,
  reducers:{
    changetheme: (state, action) => {
      state.plan = action.payload 
    }
  },
})

export const {changetheme} = themeSlice.actions;
export default themeSlice.reducer;