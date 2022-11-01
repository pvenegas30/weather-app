import React from "react";
import { formatToLocalTime } from "../services/weatherServices";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6 w-full">
        <p className="text-white font-extralight w-full text-xs text-center md:text-xl">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLocation;