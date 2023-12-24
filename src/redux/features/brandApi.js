import { BACKEND_BASE_URL } from "@/consts/site-data";
import { apiSlice } from "../api/apiSlice";

const url = BACKEND_BASE_URL;

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `${url}/api/brand/active`,
    }),
  }),
});

export const { useGetActiveBrandsQuery } = brandApi;
