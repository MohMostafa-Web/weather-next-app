import Image from "next/image";

const Weather = ({ weatherData: { name, weather, main, sys, wind } }) => {
  return (
    <div className="relative h-[75vh] z-[2] max-w-[500px]  m-auto text-white p-4 flex flex-col justify-between">
      {/* Weather Summary */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weather[0].main}
            width={100}
            height={100}
          />
          <span className="text-xl sm:text-2xl">{weather[0].main}</span>
        </div>
        <span className="font-medium text-8xl sm:text-9xl">
          {main.temp.toFixed(0)} &#8451;
        </span>
      </div>
      {/* Weather Details */}
      <div className="bg-black/50 p-6 text-center rounded-md">
        <h4 className="text-2xl mb-6">
          Weather in {name}, {sys.country}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-medium text-lg sm:text-xl">
              {main.feels_like.toFixed(0)} &#8451;
            </span>
            <span className="sm:text-lg">Feels like</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg sm:text-xl">
              {main.humidity} %
            </span>
            <span className="sm:text-lg">Humidity</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg sm:text-xl">
              {wind.speed.toFixed(1)} mph
            </span>
            <span className="sm:text-lg">Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
