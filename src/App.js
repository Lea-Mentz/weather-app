import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import "./App.css";

export default function App() {
  const [activities, setActivities] = useState(
    localStorage.getItem("allActivities")
      ? JSON.parse(localStorage.getItem("allActivities"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("allActivities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(activityName, isChecked) {
    const activityObject = {
      name: activityName,
      goodWeather: isChecked,
      id: uid(),
    };

    setActivities([...activities, activityObject]);
  }

  return (
    <main>
      <h1>Against Boredom</h1>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}
