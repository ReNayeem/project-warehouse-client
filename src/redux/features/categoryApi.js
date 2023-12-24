import { BACKEND_BASE_URL } from "@/consts/site-data";
import { apiSlice } from "../api/apiSlice";

const url = BACKEND_BASE_URL;

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `${url}/api/category/add`,
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `${url}/api/category/show`,
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `${url}/api/category/show/${type}`,
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetProductTypeCategoryQuery,
  useGetShowCategoryQuery,
} = categoryApi;
