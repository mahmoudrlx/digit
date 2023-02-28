import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com/",
    mode: "no-cors",
    prepprepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "v1/search?query=nature",
    }),
    getProduct: builder.query({
      query: (product) => `v1/search?query=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
