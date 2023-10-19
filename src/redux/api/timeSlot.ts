
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/time-slots";

export const timeSlotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    timeSlots: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.slot],
    }),

    timeSlot: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.slot]
    }),

    addTimeSlot: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.slot]
      }),

    updateTimeSlot: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.slot]
    }),

    
    deleteTimeSlots: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.slot]
    }),

  }),
});

export const { useTimeSlotsQuery,useTimeSlotQuery,useAddTimeSlotMutation,useUpdateTimeSlotMutation,useDeleteTimeSlotsMutation } = timeSlotApi;
