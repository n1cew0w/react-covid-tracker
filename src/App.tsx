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
