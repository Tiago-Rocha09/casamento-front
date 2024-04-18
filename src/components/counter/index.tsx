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

    if (difference > 0) {
      timeLeft = {
        days: {
          text: "DIAS",
          value: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
        },
        hours: {
          text: "HORAS",
          value: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
        },
        minutes: {
          text: "MINUTOS",
          value: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0"),
        },
        seconds: {
          text: "SEGUNDOS",
          value: Math.floor((difference / 1000) % 60)
            .toString()
            .padStart(2, "0"),
        },
      };
    }

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

  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-3xl md:text-5xl font-bold">Contagem regressiva</h2>
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Tempo esgotado!</span>
        )}
      </div>
    </article>
  );
};
