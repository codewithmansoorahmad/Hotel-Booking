import { createSlice } from "@reduxjs/toolkit";


const favoriteHotels=createSlice({
    name:"favorite",
    initialState:{
        hotels:JSON.parse(localStorage.getItem("favoritism"))||[],
        book:JSON.parse(localStorage.getItem("booking"))||[],
    },
    reducers:{
        addToFavorite:(state,action)=>{
            state.hotels.push(action.payload)
            localStorage.setItem("favoritism",JSON.stringify(state.hotels))
        },
        removeFromFavorites(state,action){
            state.hotels=state.hotels.filter((item)=>item.id!==action.payload.id)
            localStorage.setItem("favoritism",JSON.stringify(state.hotels))

        },
        getBookingData(state,action){
state.book=action.payload
            localStorage.setItem("booking",JSON.stringify(state.book))
        }
    }
})
export const {addToFavorite,removeFromFavorites,getBookingData}=favoriteHotels.actions
export default favoriteHotels.reducer