import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState("");
  const timeFormatter = (value) => {
    if (value < 10) {
      return "0";
    } else {
      return "";
    }
  };
  useEffect(() => {
    const timeID = setInterval(() => tick(), 1000);
    return function cleanUp() {
      clearInterval(timeID);
    };
  });
  const tick = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    setTime(
      timeFormatter(hour) +
        hour +
        ":" +
        timeFormatter(minute) +
        minute +
        ":" +
        timeFormatter(second) +
        second
    );
  };
  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
}
