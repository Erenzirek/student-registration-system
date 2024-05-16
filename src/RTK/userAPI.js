// Redux Toolkit ve fetchBaseQuery modüllerini projeye ekleyin
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Kullanıcı API'sini oluşturun
const userApi = createApi({
    // Reducer path'i belirtin
    reducerPath: "userApi",
    // Temel sorgu yapısını belirtin ve temel URL'i belirtin
    baseQuery: fetchBaseQuery({ baseUrl: "https://6645de09b8925626f893871c.mockapi.io" }),
    // Etiket türlerini belirtin
    tagTypes: ["User"],
    // Endpoint'leri oluşturun
    endpoints: (builder) => (
        {
            // Kullanıcıları almak için bir sorgu oluşturun
            getUsers: builder.query({
                query: () => "/users",
                providesTags: ["User"]
            }),
            // Belirli bir kullanıcıyı almak için bir sorgu oluşturun
            getUser: builder.query({
                query: (id) => `/users/${id}`,
                providesTags: ["User"]
            }),
            // Kullanıcı eklemek için bir mutasyon oluşturun
            addUser: builder.mutation({
                query: (user) => ({
                    url: "/users",
                    method: "POST",
                    body: user // Kullanıcı verilerini sorguya geçirin
                }),
                invalidatesTags: ["User"]
            }),
            // Kullanıcıyı güncellemek için bir mutasyon oluşturun
            updateUser: builder.mutation({
                query: (user) => ({
                    url: `/users/${user.id}`,
                    method: "PUT",
                    body: user // Kullanıcı verilerini sorguya geçirin
                }),
                invalidatesTags: ["User"]
            }),
            // Kullanıcıyı silmek için bir mutasyon oluşturun
            deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/users/${id}`,
                    method: "DELETE"
                }),
                invalidatesTags: ["User"]
            })
        }
    )
});

// Kullanıcı API'sini dışa aktarın (varsayılan dışa aktarma)
export default userApi;

// API tarafından sağlanan sorgu ve mutasyonları kullanmak için hook'ları dışa aktarın
export const { 
    useGetUsersQuery, 
    useGetUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;

// Bu kod parçası Redux Toolkit ile oluşturulan bir API'yi tanımlıyor.
// `useGetUsersQuery`, `useGetUserQuery`, `useAddUserMutation` vb. gibi hook'lar, 
// API tarafından sağlanan sorgu ve mutasyonları kullanmak için kullanılabilir.
