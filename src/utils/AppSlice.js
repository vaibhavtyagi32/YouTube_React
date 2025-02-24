import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:"app",
    initialState:{
        isOpenMenu:true,
    },
    reducers:{
        toggleMenu:(state)=> {
            state.isOpenMenu=!state.isOpenMenu
        },
        closeMenu:(state)=> {
            state.isOpenMenu=false;
        }
    }
})
export const {toggleMenu,closeMenu}=AppSlice.actions;
export default AppSlice.reducer;