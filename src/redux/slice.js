import { createSlice } from "@reduxjs/toolkit";


const favoriteHotels=createSlice({
    name:"favorite",
    initialState:{
        hotels:JSON.parse(localStorage.getItem("favoritism"))||[]
    },
    reducers:{
        addToFavorite:(state,action)=>{
            state.hotels.push(action.payload)
            localStorage.setItem("favoritism",JSON.stringify(state.hotels))
        },
       
    }
})
export const {addToFavorite}=favoriteHotels.actions
export default favoriteHotels.reducer