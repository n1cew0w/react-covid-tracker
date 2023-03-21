import React, {useState} from 'react';
import {useGetAllCountriesQuery, useGetStatisticsByCountryQuery} from "../redux/api/covidApi";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../redux/slices/searchSlice";
import {setSelectValue} from "../redux/slices/selectSlice";

const SelectCountries = () => {
    const [select, setSelect] = useState('')
    // const {data, error} = useGetStatisticsByCountryQuery(`${selectValue}`)
    const dispatch = useDispatch()
    const {data,error} = useGetAllCountriesQuery()

    const onChangeSelect = (event) => {

        setSelect(event.target.value)
        console.log('STATE:', select)
        dispatch(setSelectValue(select))
        console.log(event.target.value)
    }

    return (
        <div>
            <label htmlFor="country-select">Choose a country:</label>

            <select onChange={onChangeSelect} name="countries" id="country-select">

                <option value="">--Please choose an option--</option>
                {data?.response &&
                    data.response.map((item) => {
                        return(
                            <option value={item}>{item}</option>
                            )

                    })

                }

            </select>

        </div>
    );
};

export default SelectCountries;