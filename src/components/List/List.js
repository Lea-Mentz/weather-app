import "./List.css";
import { useState, useEffect } from "react";
export default function List(props) {
  const [filteredWeather, setFilteredWeather] = useState();
  const isGoodWeather = true;

  useEffect(() => {
    // activities.map(isGoodWeather === true);
    // setInterval(5);
  }, []);
  return (
    <ul>
      {props.activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
}
