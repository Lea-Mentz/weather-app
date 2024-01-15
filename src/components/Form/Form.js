import "./Form.css";
import React, { useState } from "react";

export default function Form(props) {
  const [activityName, setActivityName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handlesubmit(event) {
    event.preventDefault();
    const formData = event.target;
    formData.activityname.focus();
    console.log(isChecked, activityName);
    props.onAddActivity(activityName, isChecked);
  }

  function handleActivityName(event) {
    setActivityName(event.target.value);
  }

  function handleGoodWeatherState(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h2>Add new Activity:</h2>
        <label htmlFor="activityName">Name</label>
        <input
          type="text"
          name="activityname"
          id="activityName"
          value={activityName}
          placeholder="Activity name"
          onChange={handleActivityName}
        ></input>

        <label htmlFor="goodweatherCheckbox">Good-weather activity</label>
        <input
          type="checkbox"
          name="weathercheckbox"
          id="goodweatherCheckbox"
          value={isChecked}
          onChange={handleGoodWeatherState}
        ></input>

        <button type="submit" data-js="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
