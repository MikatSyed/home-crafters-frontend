import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const payment = "/payment";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myPayments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${payment}/my-semester-payments`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          myPayments: response,
          meta,
        };
      },
      providesTags: [tagTypes.payment],
    }),
    initialPayment: build.mutation({
      query: (data: any) => ({
        url: `${payment}/init`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
  }),
});

export const { useMyPaymentsQuery, useInitialPaymentMutation } = paymentApi;

export default paymentApi;
