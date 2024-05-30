import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// const PRODUCTS_URL = `/api/products`;

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
                // method: "GET",
                // providesTags: ['Products']
            }),

            keepUnusedDataFor: 5,
        }),
    }),
})

export const { useGetProductsQuery } = productsApiSlice