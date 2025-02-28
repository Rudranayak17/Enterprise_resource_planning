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
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-User?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),
    master_class: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-class?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    get_user_session: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-user_session?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    master_get_bus: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-Bus?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    get_student_fee: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-student_fee?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),
    master_get_session: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-session?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    sub_fee_type: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-Bus?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),
    get_Subject: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-Subject?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),

    get_class_session_fee: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-class_session_fee?limit=${pageSize}&page=${page}`,

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-tenant-id": credentials.schoolId,
          },
          // body: credentials,
        };
      },
    }),
    get_period: builder.query({
      query: (credentials) => {
        const { pageSize, page } = credentials;
        return {
          url: `/api/v1/get-period?limit=${pageSize}&page=${page}`,

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
  useMaster_classQuery,
  useUpload_FileMutation,
  useMaster_get_busQuery,
  useSub_fee_typeQuery,
  useMaster_get_sessionQuery,
  useGet_class_session_feeQuery,
  useGet_student_feeQuery,
  useGet_SubjectQuery,
  useGet_user_sessionQuery,
  useGet_periodQuery
} = authApiSlice;
