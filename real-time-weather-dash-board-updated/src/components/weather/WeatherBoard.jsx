import useWeather from "../../hooks/useWeather";
import AddToFav from "./AddToFav";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadLine from "./weatherHeadLine";

export default function WeatherBoard() {
  const { weatherData, error, loading } = useWeather();
  console.log("weather data: ", weatherData);
  console.log("error :", error);
  console.log("loading :", loading);
  return (
    <>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            <AddToFav />
            <WeatherHeadLine />
            <WeatherCondition />
          </div>
        </div>
      </div>
    </>
  );
}
