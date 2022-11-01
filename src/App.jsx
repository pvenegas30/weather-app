
import "./roller.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherServices";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const [query, setQuery] = useState({ q: "caracas" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-[url('./assets/img/default.jpg')] bg-cover bg-center";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "bg-[url('./assets/img/default.jpg')] bg-cover bg-center";

    return "bg-[url('./assets/img/heat.jpeg')] bg-cover bg-center";
  };

  return (
    <div className={`min-w-screen-full w-full py-5 px-20 h-full md:px-30 ${formatBackground()}`}>

      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      <div className="flex items-center justify-center w-full">
        <a href="https://pedro-venegas-developer.netlify.app/inicio" title="Ir a portafolio" target="_blank" className="text-white border rounded-full w-full py-1 px-3 hover:bg-cyan-900 text-xxs text-center md:text-sm md:w-2/4 lg:w-1/4	">Pedro Venegas ©2022</a>
      </div>

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TemperatureDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer className="foo text-xxs hidden md:block" style={{ width: "150px"}}  autoClose={3000} theme="colored" newestOnTop={true} />

    </div>
  );
}

export default App;