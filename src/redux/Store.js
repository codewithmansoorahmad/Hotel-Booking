import { configureStore } from "@reduxjs/toolkit";
// import favoriteReducer from "./Slice"
import favoriteReducer from "./Slice"
const store=configureStore({
    reducer:{
favorite:favoriteReducer
    }


})
export default store