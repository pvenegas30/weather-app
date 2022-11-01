import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id: 1,
            title:"Berlin"
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
        <div className="flex items-center justify-around my-6 ">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white tr hover:text-cyan-300 text-lg font-medium mr-4 md:mr-2 lg:text-2xl lg:tracking-[.2em] md:font-bold"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
      );
    }

export default TopButtons