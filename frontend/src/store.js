import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./reducers/cartReducer";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true,

    // devTools: process.env.NODE_ENV !== 'production'
     

})



export default store