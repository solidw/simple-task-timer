import React, { useEffect } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  useEffect(() => {
    return () =>
      window.localStorage.setItem(
        "asf",
        JSON.stringify(`{something:"something"}`)
      );
  }, []);
  return (
    <div className="app-wrapper">
      <Timer />
    </div>
  );
}
export default App;
