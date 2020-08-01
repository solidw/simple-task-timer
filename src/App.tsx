import React, { useEffect } from "react";
import Timer from "./components/Timer";
import "./App.css";
import TimerContextProvider from "./contexts/TimerContext";

function App() {
  useEffect(() => {
    return () =>
      window.localStorage.setItem(
        "asf",
        JSON.stringify(`{something:"something"}`)
      );
  }, []);
  console.log("app is on");
  return (
    <TimerContextProvider>
      <div className="app-wrapper">
        <Timer />
      </div>
    </TimerContextProvider>
  );
}
export default App;
