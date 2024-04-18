"use client";
import React, { useState, useEffect } from "react";
import { CounterItem } from "./components/item";

type CounterComponentProps = {
  targetDate: string;
};

type ItemTimeLeftProps = {
  text: string;
  value: string;
};

type TimeLeftProps = {
  [key: string]: ItemTimeLeftProps;
};

export const CounterComponent = ({ targetDate }: CounterComponentProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeftProps = {};
    const days = difference / (1000 * 60 * 60 * 24);
    const hours = (difference / (1000 * 60 * 60)) % 24;
    const minutes = (difference / 1000 / 60) % 60;
    const seconds = (difference / 1000) % 60;
    timeLeft = {
      days: {
        text: "DIAS",
        value:
          days > 0
            ? Math.floor(difference / (1000 * 60 * 60 * 24)).toString()
            : "0",
      },
      hours: {
        text: "HORAS",
        value:
          hours > 0
            ? Math.floor((difference / (1000 * 60 * 60)) % 24)
                .toString()
                .padStart(2, "0")
            : "0",
      },
      minutes: {
        text: "MINUTOS",
        value:
          minutes > 0
            ? Math.floor((difference / 1000 / 60) % 60)
                .toString()
                .padStart(2, "0")
            : "0",
      },
      seconds: {
        text: "SEGUNDOS",
        value:
          seconds > 0 ? Math.floor(seconds).toString().padStart(2, "0") : "0",
      },
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <CounterItem key={interval} {...timeLeft[interval]} />
    );
  });

  return timerComponents.length ? (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl md:text-5xl font-bold">Contagem regressiva</h2>
      <div className="grid grid-flow-row grid-cols-4 gap-2 md:gap-4">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Tempo esgotado!</span>
        )}
      </div>
    </article>
  ) : null;
};
