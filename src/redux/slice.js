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
        removeFromFavorites(state,action){
            state.hotels=state.hotels.filter((item)=>item.id!==action.payload.id)
            localStorage.setItem("favoritism",JSON.stringify(state.hotels))

        }
    }
})
export const {addToFavorite,removeFromFavorites}=favoriteHotels.actions
export default favoriteHotels.reducer