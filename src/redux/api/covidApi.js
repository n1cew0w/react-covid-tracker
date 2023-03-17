import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ApiHeaders = {
    "X-RapidAPI-Key": "dc2d04647fmshd2b1ec8c15a88b8p1d364bjsn860357e4fabc",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
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
