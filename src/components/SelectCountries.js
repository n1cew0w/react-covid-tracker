import React, {useEffect, useState} from 'react';
import {useGetAllCountriesQuery, useGetStatisticsByCountryQuery} from "../redux/api/covidApi";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../redux/slices/searchSlice";
import {setSelectValue} from "../redux/slices/selectSlice";
import {selectSelector} from "../redux/selectors/selectSelectors";

const SelectCountries = () => {
    // const [select, setSelect] = useState('')

    // const {data, error} = useGetStatisticsByCountryQuery(`${selectValue}`)

    const {data,error} = useGetAllCountriesQuery()
    const dispatch = useDispatch()

    const selectValue = useSelector(selectSelector => {
        return selectSelector.selectSlice.selectValue
    })


    const onChangeSelect = (event) => {
            dispatch(setSelectValue(event.target.value))
    }

    return (
        <div>
            <label htmlFor="country-select">Choose a country:</label>

            <select onChange={onChangeSelect} name="countries" id="country-select">

                <option value="">--Please choose an option--</option>
                {data?.response &&
                    data.response.map((item) => {
                        return(
                            <option key={item} value={item}>{item}</option>
                            )

                    })

                }

            </select>

        </div>
    );
};

export default SelectCountries;