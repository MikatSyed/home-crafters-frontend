import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const AUTH_URL = '/auth'
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/login`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    registration: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signup`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/change-password/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.user]
    }),
  }),
  overrideExisting: false,

  
})

export const { useUserLoginMutation,useRegistrationMutation,useChangePasswordMutation } = authApi;