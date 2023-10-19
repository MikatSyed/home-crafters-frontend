
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    bookings: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.slot,tagTypes.booking],
    }),

    booking: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.slot ,tagTypes.booking]
    }),

    addBooking: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.slot,tagTypes.booking]
      }),

    updateBooking: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.slot , tagTypes.booking]
    }),

    
    deleteBooking: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.slot , tagTypes.booking]
    }),

    checkAvailableSlot: build.query({
        query: (bookingDate) => ({
          url : `${URL}/check-available-slot?bookingDate=${bookingDate}`,
          method: "GET" ,
        }),
        providesTags:[tagTypes.booking]
        
      }),

  }),
});

export const { useBookingsQuery,useBookingQuery,useAddBookingMutation,useUpdateBookingMutation,useDeleteBookingMutation,useCheckAvailableSlotQuery } = bookingApi;
