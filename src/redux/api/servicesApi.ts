import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/services";
const  CATEGORY = "/categories"

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    services: build.query({
        query: (arg) => ({
          url : `${URL}`,
          method: "GET" ,
          params: arg
        }),
        
        providesTags:[tagTypes.services]
      }),
    categories: build.query({
        query: () => ({
          url : `${CATEGORY}`,
          method: "GET" ,
        }),
        
        providesTags:[tagTypes.services]
      }),

    service: build.query({
      query: (id:string) => ({
        url : `${URL}/${id}`,
        method: "GET"   
      }),
      
      providesTags:[tagTypes.services]
    }),

    

    addService: build.mutation({
        query: (data:any) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.services]
      }),

    updateService: build.mutation({
      query: (data:any) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.services]
    }),

    
    deleteService: build.mutation({
      query: (id:string) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.services]
    }),

  }),
});

export const { useAddServiceMutation,useServicesQuery,useServiceQuery,useUpdateServiceMutation,useDeleteServiceMutation,useCategoriesQuery } = servicesApi;
