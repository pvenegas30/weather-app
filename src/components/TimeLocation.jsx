import React from "react";
import { formatToLocalTime } from "../services/weatherServices";

function TimeLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6 w-full h-full">
        <p className="text-white text-center font-light w-80% h-2/3 scale-50 md:scale-100 lg:scale-120  ">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white scale-100 font-medium md:scale-120">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLocation;