import React, { useState, useContext, createContext, useEffect } from "react";
const storage = require("electron-json-storage");

export type TimerState = {
  title: string;
  time: number;
};

type TimerProps = {
  timerData: TimerState[];
  setTimerData: React.Dispatch<React.SetStateAction<TimerProps>>;
};

const initialContext: TimerProps = {
  timerData: [{ title: "", time: 0 }],
  setTimerData: (): void => {
    throw new Error("didn't overriden");
  },
};

const TimerContext = createContext<TimerProps | undefined>(undefined);

export default function TimerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [timerData, setTimerData] = useState(initialContext);
  console.log("timercontext is on");
  storage.get("test", (error, data) => {
    console.log(error);
    console.log(data);
  });
  useEffect(() => {
    return () => console.log("test");
  }, []);
  return (
    <TimerContext.Provider value={timerData}>{children}</TimerContext.Provider>
  );
}

export const useTimerContext = () => {
  const { timerData } = useContext(TimerContext);
  return timerData;
};
