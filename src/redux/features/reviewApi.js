import { BACKEND_BASE_URL } from "@/consts/site-data";
import { apiSlice } from "../api/apiSlice";

const url = BACKEND_BASE_URL;

export const reviewApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: `${url}/api/review/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg.productId },
      ],
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
