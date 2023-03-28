import React, {ChangeEvent, useEffect, useState} from 'react';
import {useGetAllCountriesQuery, useGetStatisticsByCountryQuery} from "../../redux/api/covidApi";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/searchSlice";
import {setSelectValue} from "../../redux/slices/selectSlice";
import {selectSelector} from "../../redux/selectors/selectSelectors";
import styles from './SelectCountires.module.css'
import {useAppDispatch} from "../../redux/hooks";

const SelectCountries = () => {

    const {data, error} = useGetAllCountriesQuery('')
    const dispatch = useAppDispatch()


    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectValue(event.target.value))
    }
    // const onChangeSelect = (event) => {
    //         dispatch(setSelectValue(event.target.value))
    // }

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <label htmlFor="country-select" className={styles.choose}>Choose a country:</label>

                <select className={`${styles.style} ${styles.widthHeight}`} onChange={onChangeSelect} name="countries"
                        id="country-select">

                    <option value="">Please choose a country</option>
                    {data?.response &&
                        data.response.map((item: any) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )

                        })

                    }

                </select>
            </div>


        </div>
    );
};

export default SelectCountries;