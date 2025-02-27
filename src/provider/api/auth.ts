import { apiSlice } from "../initalState";
const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["user"],
});
export const authApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    // Signin Endpoint
    login: builder.mutation({
      query: (credentials) => {
        console.log(credentials);
        return {
          url: `/api/v1/login`,

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tenant-id": credentials.schoolId,
          },
          body: credentials,
        };
      },
    }),
    upload_File: builder.mutation({
      query: (credentials) => {
        console.log(credentials);
        return {
          url: `/api/v1/upload-multiple`,

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: credentials,
        };
      },
    }),
    role_by_phone: builder.mutation({
      query: (credentials) => {
        const { phone, schoolId } = credentials;
        return {
          url: `/api/v1/role-by-phone?phone=${phone}&schoolID=${schoolId}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    master_user: builder.query({
      query: (credentials) => {
        const { pageSize } = credentials;
        return {
          url: `/api/v1/get-User?limit=${pageSize}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    send_otp: builder.mutation({
      query: (credentials) => {
        const { phone, schoolId } = credentials;
        console.log(credentials);
        console.log(schoolId);
        return {
          url: `/api/v1/send-otp`,

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tenant-id": credentials.schoolId,
          },
          body: credentials,
        };
      },
    }),
    reset_password: builder.mutation({
      query: (credentials) => {
        const { phone, schoolId } = credentials;
        console.log(credentials);
        console.log(schoolId);
        return {
          url: `/api/v1/reset-password`,

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tenant-id": credentials.schoolId,
          },
          body: credentials,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRole_by_phoneMutation,
  useSend_otpMutation,
  useReset_passwordMutation,
  useMaster_userQuery,
  useUpload_FileMutation
} = authApiSlice;
