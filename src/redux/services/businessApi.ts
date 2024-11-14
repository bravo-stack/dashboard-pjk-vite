import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserInput = {
  email: string;
  password: string;
};
type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

export const businessApi = createApi({
  reducerPath: "businessApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
    timeout: 1500 * 60,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, UserInput>({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = businessApi;
