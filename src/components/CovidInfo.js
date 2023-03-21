import React, {useEffect} from 'react';
import { useGetStatisticsByCountryQuery} from "../redux/api/covidApi";
import {useSelector} from "react-redux";
import {selectSelector} from "../redux/selectors/selectSelectors";


const CovidInfo = () => {

    const selectValue = useSelector((selectSelector) => {
        return selectSelector.selectSlice.selectValue
    })

    const {data, error} = useGetStatisticsByCountryQuery(selectValue)

    useEffect(() => {
         console.log('SelectVALUE', selectValue)
        // console.log('INFO', data?.response)
    }, [selectValue])

    return (
        <div>
            <div>
                General Information
                <div>
                    Country: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.country}
                </div>
                <div>
                    Population: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.population}
                </div>
                <div>
                    Day: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.day}
                </div>
            </div>

            <div>
                Infected now: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.cases?.active}
            </div>


            <div>
                DEATHS
                <div>
                    New(today): {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.deaths?.new}
                </div>
                <div>
                    Total: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.deaths?.total}
                </div>
            </div>


        </div>
    );
};

export default CovidInfo;