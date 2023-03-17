import React, {useEffect} from 'react';
import {useGetCountriesCovidQuery} from "../redux/api/covidApi";
import {useSelector} from "react-redux";
import {searchValueSelector} from "../redux/slices/searchSlice";
import {selectValue} from "../redux/inputSelectors";

const CovidInfo = () => {

    const queryValue = useSelector((selectValue) => {
        return selectValue.searchSlice.searchValue
    })
    console.log(queryValue)
    const {data, error} = useGetCountriesCovidQuery(queryValue)
    useEffect(()=>{
        console.log('QUERYVALUE',queryValue)
        console.log('INFO',data?.response)
    },[data?.response])
    return (
        <div>
                <div>
                   Country: {data?.response?.[0]?.country}
                </div>
                <div>

                </div>


        </div>
    );
};

export default CovidInfo;