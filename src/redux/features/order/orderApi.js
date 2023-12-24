import { BACKEND_BASE_URL } from "@/consts/site-data";
import { apiSlice } from "../../api/apiSlice";
import { set_client_secret } from "./orderSlice";

const url = BACKEND_BASE_URL;

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // createPaymentIntent
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `${url}/api/order/create-payment-intent`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(set_client_secret(result.clientSecret));
        } catch (err) {
          // do nothing
        }
      },
    }),
    // saveOrder
    saveOrder: builder.mutation({
      query: (data) => ({
        url: `${url}/api/order/saveOrder`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserOrders"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            localStorage.removeItem("couponInfo");
            localStorage.removeItem("cart_products");
            localStorage.removeItem("shipping_info");
          }
        } catch (err) {
          // do nothing
        }
      },
    }),
    // getUserOrders
    getUserOrders: builder.query({
      query: () => `${url}/api/user-order`,
      providesTags: ["UserOrders"],
      keepUnusedDataFor: 600,
    }),
    // getUserOrders
    getUserOrderById: builder.query({
      query: (id) => `${url}/api/user-order/${id}`,
      providesTags: (result, error, arg) => [{ type: "UserOrder", id: arg }],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useSaveOrderMutation,
  useGetUserOrderByIdQuery,
  useGetUserOrdersQuery,
} = authApi;
