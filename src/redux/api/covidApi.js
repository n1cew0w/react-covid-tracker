import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const API_Key = process.env.REACT_APP_API_KEY
const API_Host = process.env.REACT_APP_API_HOST

const ApiHeaders = {
    "X-RapidAPI-Key": `${API_Key}`,
    "X-RapidAPI-Host": `${API_Host}`
};



const createRequest = (url,params) => ({ url,params, headers: ApiHeaders});

export const covidApi = createApi({
    reducerPath: "covidApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://covid-193.p.rapidapi.com`
    }),
    endpoints: (builder) => ({

        getCountriesCovid: builder.query({
            query: (arg)=> createRequest(`/statistics`,{country: `${arg}`}),

        })
    }),

})

export const {useGetCountriesCovidQuery} = covidApi
