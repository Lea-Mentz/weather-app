import "./List.css";
import { useState, useEffect } from "react";
export default function List(props) {
  const [filteredWeather, setFilteredWeather] = useState();
  const isGoodWeather = true;

  //   useEffect(() => {
  //     props.activities.map(isGoodWeather);
  //     // setInterval(5);
  //   }, []);
  return (
    <ul>
      {props.activities.map((activity) => (
        <li>
          {activity.name}
          <button>X</button>
        </li>
      ))}
    </ul>
  );
}
