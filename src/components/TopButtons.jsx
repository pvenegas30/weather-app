import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id: 1,
            title:"Caracas"
        },
        {
            id: 2,
            title:"London"
        },
        {
            id: 3,
            title:"Tokyo"
        },
        {
            id: 4,
            title:"Oslo"
        },
        {
            id: 5,
            title:"Paris"
        },
    ]
    return (
        <div className="flex items-center justify-around my-6">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white text-lg font-medium mr-4 md:mr-2"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
      );
    }

export default TopButtons