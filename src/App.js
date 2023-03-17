
import {useGetCountriesCovidQuery} from "./redux/api/covidApi";

function App() {
  const {data,error} = useGetCountriesCovidQuery('Poland')
  console.log(error)
  console.log(data)
  return (
    <div className="App">

    </div>
  );
}

export default App;
