import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MembersApi = createApi({
    reducerPath: "MembersApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/users/"
    }),
    tagTypes: ['Members'],
    endpoints: (builder) => ({
        // getMembers: builder.query({
        //     query: () => 'users',
        //     providesTags: ['Members']
        // }), 
        // searchMembers: builder.query({
        //     query: ({searchText, limit, order, skip, sortByFieldName}) => `search?limit=${limit}&skip=${skip}&${searchText.length > 0 ? `q=${encodeURIComponent(searchText)}&` : ""}${order && sortByFieldName ? `sortBy=${sortByFieldName}&order=${order}` : ""}`,
        //     providesTags: ['Members']
        // }),

        // searchMembers: builder.query({
        //     query: ({searchText, limit, order, skip, sortByFieldName}) => ({
        //         url: `search`,
        //         method : 'GET',
        //         params : {searchText : searchText ? searchText : undefined , limit: limit ? limit : undefined, skip : skip ? skip : undefined, order: order ? order : undefined, sortByFieldName: sortByFieldName ? sortByFieldName : undefined}
        //     }), 
        //     providesTags: ['Members']
        // }),

        searchMembers: builder.query({
            query: ({searchText, limit, skip, order, sortByFieldName}) => {
                const params = new URLSearchParams();

                params.set("limit", limit);
                params.set("skip", skip);

                if (searchText) {
                    params.set("q", searchText);
                }

                if (order && sortByFieldName) {
                    params.set("order", order);
                    params.set("sortByFieldName", sortByFieldName);
                }

                return `search?${params.toString()}`
            }, 
            providesTags: ['Members']
        })

        // sortMembersAsc: builder.query({
        //     query: ({order, limit, page}) => `users/search?sortBy=firstName&order=${order}&limit=${limit}&skip=${page}`,
        //     providesTags: ['Members']
        // }),
        // paginateMembers: builder.query({
        //     query: ({page, limit}) => `users/search?limit=${limit}&skip=${page}`,
        //     providesTags: ['Members']
        // })
    })
})

export const { useGetMembersQuery, useSearchMembersQuery, useSortMembersAscQuery, usePaginateMembersQuery } = MembersApi; 