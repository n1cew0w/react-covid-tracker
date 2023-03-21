import React, {useState} from 'react';
import {useGetStatisticsByCountryQuery} from "../redux/api/covidApi";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../redux/slices/searchSlice";

const Input = () => {
    const [inputValue, setInputValue] = useState('')
    const {data, error} = useGetStatisticsByCountryQuery(`${inputValue}`)
    const dispatch = useDispatch()


    const onChangeInput = (event) => {

        dispatch(setSearchValue(inputValue))
        setInputValue(event.target.value)
        // console.log(data?.response?.[0]?.country)
    }
    return (
        <input type="text" value={inputValue} onChange={onChangeInput}/>
    );
};

export default Input;