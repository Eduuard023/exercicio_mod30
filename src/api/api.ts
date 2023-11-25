import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getSomeData: builder.query({
      query: () => 'some-endpoint'
    })
  })
})

export const { useGetSomeDataQuery } = api
export default api
