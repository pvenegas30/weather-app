import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherServices";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-5 text-white font-bold">
        <p className=" bg-black p-2 px-6 rounded-full tracking-[.25em] uppercase">{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white my-3 ">
        
        <img src={iconUrlFromCode(icon)} alt="" className="w-20 md:w-30" />
        
        <p className="w-80% font-bold scale-100 md:scale-150 md:ml-20">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-2 px-4">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-x-2 text-white text-sm py-3 md:flex-row">
        <UilSun  size={50} className="mb-4 md:mb-0"/>
        <p className="font-light text-xs">
          Rise:{" "}
          <span className="font-medium">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light hidden md:block">|</p>

        <UilSunset size={50} className="mb-4 md:mb-0"/>
        <p className="font-light">
          Set:{" "}
          <span className="font-medium">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light hidden md:block">|</p>

        <UilSun size={50} className="mb-4 md:mb-0"/>
        <p className="font-light">
          High:{" "}
          <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light hidden md:block">|</p>

        <UilSun size={50} className="mb-4 md:mb-0"/>
        <p className="font-light">
          Low:{" "}
          <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
