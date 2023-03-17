import React, {useEffect} from 'react';
import {useGetCountriesCovidQuery} from "../redux/api/covidApi";
import {useSelector} from "react-redux";
import {searchValueSelector} from "../redux/slices/searchSlice";
import {selectValue} from "../redux/inputSelectors";

const CovidInfo = () => {

    // if (!data?.response?.length){
    //     return
    // }

    const queryValue = useSelector((selectValue) => {
        return selectValue.searchSlice.searchValue
    })
    console.log(queryValue)
    const {data, error} = useGetCountriesCovidQuery(queryValue)
    useEffect(() => {
        console.log('QUERYVALUE', queryValue)
        console.log('INFO', data?.response)
    }, [data?.response])
    return (
        <div>
            <div>
                General Information
                <div>
                    Country: {!data?.response?.length  ? `Empty (enter country)` : data?.response?.[0]?.country}
                </div>
                <div>
                    Population: {!data?.response?.length  ? `Empty (enter country)` : data?.response?.[0]?.population}
                </div>
                <div>
                    Day: {!data?.response?.length  ? `Empty (enter country)` :data?.response?.[0]?.day}
                </div>
            </div>

            <div>
                Infected now: {!data?.response?.length  ? `Empty (enter country)` :data?.response?.[0]?.cases?.active}
            </div>


            <div>
                DEATHS
                <div>
                    New(today): {!data?.response?.length  ? `Empty (enter country)` :data?.response?.[0]?.deaths?.new}
                </div>
                <div>
                    Total: {!data?.response?.length  ? `Empty (enter country)` :data?.response?.[0]?.deaths?.total}
                </div>
            </div>





        </div>
    );
};

export default CovidInfo;