import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const API_Key = process.env.REACT_APP_API_KEY
const API_Host = process.env.REACT_APP_API_HOST

const ApiHeaders = {
    "X-RapidAPI-Key": `${API_Key}`,
    "X-RapidAPI-Host": `${API_Host}`
};



const createRequestWithParams = (url,params) => ({ url,params, headers: ApiHeaders});
const createRequest = (url) => ({ url, headers: ApiHeaders});

export const covidApi = createApi({
    reducerPath: "covidApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://covid-193.p.rapidapi.com`
    }),
    endpoints: (builder) => ({

        getStatisticsByCountry: builder.query({
            query: (arg)=> createRequestWithParams(`/statistics`,{country: `${arg}`}),

        }),
        getAllCountries: builder.query(({
            query: () => createRequest(`/countries`)
        }))
    }),

})

export const {useGetStatisticsByCountryQuery, useGetAllCountriesQuery} = covidApi
