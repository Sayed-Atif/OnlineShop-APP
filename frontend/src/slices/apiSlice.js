import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
// import {store} from '../store';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Products', 'Cart', 'User', 'Orders'],
    endpoints: (builder) => ({

        // We can add multiple queries here for multiple endpoints such as getProducts and getCart and so on too.
    //     getProducts: builder.query({
    //         query: () => ({
    //             url: PRODUCTS_URL,
    //             method: "GET",
    //             providesTags: ['Products']
    //         }),
    //         keepUnusedDataFor: 5,
    //     }),

    //     getCart: builder.query({
    //         query: () => ({
    //             url: CART_URL,
    //             method: "GET",
    //             providesTags: ['Cart']
    //         }),
    //         keepUnusedDataFor: 5,

    })





})


// export const {useGetProductsQuery} = apiSlice
