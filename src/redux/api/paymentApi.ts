import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/payment";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    postPayment: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
      
      }),  

  }),
});

export const {  usePostPaymentMutation } = feedbackApi;
