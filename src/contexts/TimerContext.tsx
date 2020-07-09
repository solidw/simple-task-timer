import React, { useState, useContext, createContext } from "react";

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

  return (
    <TimerContext.Provider value={timerData}>{children}</TimerContext.Provider>
  );
}
