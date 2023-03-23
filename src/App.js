import {useGetCountriesCovidQuery} from "./redux/api/covidApi";
import {useCallback, useDeferredValue, useEffect, useState} from "react";
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {setSearchValue} from "./redux/slices/searchSlice";
import Input from "./components/Input";
import CovidInfo from "./components/CovidInfo/CovidInfo";
import SelectCountries from "./components/SelectCountires/SelectCountries";

function App() {



    return (
        <div className="App">
            <SelectCountries/>
            {/*<Input/>*/}
            <CovidInfo/>
        </div>
    );
}

export default App;
