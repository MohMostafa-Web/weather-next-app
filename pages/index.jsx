import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    city ? city : "cairo"
  }&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

  /* Create function to get weather data from API */
  const fetchWeatherData = () => {
    setLoading(true);
    setErrorMsg("");
    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
        // console.log(res.data); // debug
        setLoading(false);
        setCity("");
      })
      .catch((err) => {
        // console.log(err.message); // debug
        // console.log(err.response.data.message); // debug
        setErrorMsg(err.response.data.message);
        setLoading(false);
        setCity("");
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  /* Check if loading is true to show loading indicator */
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="relative h-screen">
      {/* Head metadate */}
      <Head>
        <title>Weather - Next App</title>
        <meta
          name="description"
          content="This app provides a national and local weather forecast for cities"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]"></div>
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1497465135434-9dc15238075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80"
        alt="nature background"
        layout="fill"
        className="object-cover"
      />
      {/* Search Form */}
      <div className="pt-8">
        <form
          className="relative z-[2] w-[90%] max-w-[500px] p-3 m-auto text-white border-gray border border-gray-300 rounded-2xl flex"
          onSubmit={(e) => {
            e.preventDefault();
            fetchWeatherData();
          }}
        >
          <div className="flex-1">
            <input
              className="w-full bg-transparent border-none outline-none text-2xl placeholder:text-gray-300"
              type="text"
              placeholder="Search a city e.g. Cairo"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button className="text-xl" type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
      {/* Weather Data */}
      {weatherData && !errorMsg ? (
        <Weather weatherData={weatherData} />
      ) : (
        <h3 className="relative text-2xl text-center p-7 text-red-700">
          {errorMsg}
        </h3>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}
