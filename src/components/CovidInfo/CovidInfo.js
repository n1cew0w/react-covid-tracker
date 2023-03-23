import React, {useEffect} from 'react';
import { useGetStatisticsByCountryQuery} from "../../redux/api/covidApi";
import {useSelector} from "react-redux";
import {selectSelector} from "../../redux/selectors/selectSelectors";
import styles from './CovidInfo.module.css'


const CovidInfo = () => {

    const selectValue = useSelector((selectSelector) => {
        return selectSelector.selectSlice.selectValue
    })

    const {data, error} = useGetStatisticsByCountryQuery(selectValue)

    useEffect(() => {

    }, [selectValue])

    return (
        <div className={styles.container}>
            <div className={styles.general_info}>
                General Information
                <div className={styles.general_desc}>
                    <div >
                        Country: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.country}
                    </div>
                    <div>
                        Population: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.population}
                    </div>
                    <div >
                        Day: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.day}
                    </div>
                </div>
                <div className={styles.infected}>
                    Infected now: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.cases?.active}
                </div>
            </div>
            <div className={`${styles.container_deaths} ${styles.general_info}`}>
                DEATHS
                <div  className={styles.general_desc}>
                    <div>
                        New(today): {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.deaths?.new}
                    </div>
                    <div>
                        Total: {!data?.response?.length ? `Empty (enter country)` : data?.response?.[0]?.deaths?.total}
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CovidInfo;