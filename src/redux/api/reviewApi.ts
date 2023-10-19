import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    reviews: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.review],
    }),

    reviewByServiceId: build.query({
      query: (id:string) => {
        return {
          url: `${URL}/${id}`,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.review],
    }),

 
    addReview: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.review]
      }),

  

    
   

  }),
});

export const { useAddReviewMutation,useReviewsQuery,useReviewByServiceIdQuery } = reviewApi;
