import './App.css'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeLocation from './components/TimeLocation'
import TemporeratureDetails from './components/TemporeratureDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherservices'

function App() {

  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {

    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);

  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-[url('./assets/forest.jpg')] bg-cover bg-start h-fit shadow-xl shadow-gray-400">

      <TopButtons/>
      <Inputs/>

      <TimeLocation/>
      <TemporeratureDetails/>

      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  )
}

export default App;
