import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/blogs";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    blogs: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.blog],
    }),

    blog: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.blog]
    }),

    addBlog: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.blog]
      }),

    updateBlog: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.blog]
    }),

    
    deleteBlog: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.blog]
    }),

  }),
});

export const { useBlogsQuery,useBlogQuery,useAddBlogMutation,useUpdateBlogMutation,useDeleteBlogMutation } = blogApi;
