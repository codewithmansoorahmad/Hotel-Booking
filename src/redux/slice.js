import { createSlice } from "@reduxjs/toolkit";


const favoriteHotels=createSlice({
    name:"favorite",
    initialState:{
        hotels:[]
    },
    reducers:{
        addToFavorite:(state,action)=>{
            state.hotels.push(action.payload)
        },
       
    }
})
export const {addToFavorite}=favoriteHotels.actions
export default favoriteHotels.reducer