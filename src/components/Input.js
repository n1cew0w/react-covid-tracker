import React, {useState} from 'react';
import {useGetCountriesCovidQuery} from "../redux/api/covidApi";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../redux/slices/searchSlice";

const Input = () => {
    const [country, setCountry] = useState('')
    const {data, error} = useGetCountriesCovidQuery(`${country}`)
    const dispatch = useDispatch()


    const onChangeInput = (event) => {

        dispatch(setSearchValue(country))
        setCountry(event.target.value)
        // console.log(data?.response?.[0]?.country)
    }
    return (
        <input type="text" value={country} onChange={onChangeInput}/>
    );
};

export default Input;