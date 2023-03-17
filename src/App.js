import {useGetCountriesCovidQuery} from "./redux/api/covidApi";
import {useCallback, useDeferredValue, useEffect, useState} from "react";
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {setSearchValue} from "./redux/slices/searchSlice";
import Input from "./components/Input";
import CovidInfo from "./components/CovidInfo";

function App() {



    return (
        <div className="App">
            <Input/>
            <CovidInfo/>
        </div>
    );
}

export default App;
