import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-col justify-center my-6 w-full md:flex-row">
      <div className="flex flex-row  items-center justify-center space-x-4 w-full">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 pl-4 w-full rounded-l-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={27}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={27}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        ></UilLocationPoint>
        <p className="text-white text-xxs font-semibold hidden md:block ">Current location</p>
      </div>

      <div className="flex flex-row w-full items-center justify-center mt-6 mb-2 text-xl h-1/5 md:mt-3">
        <button
          name="metric"
          className=" text-white font-light transition ease-out scale-150 md:font-semibold hover:scale-175"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-8 md:mx-4">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out scale-150 md:font-semibold hover:scale-175"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;