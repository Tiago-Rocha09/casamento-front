"use client";

export type CounterItemProps = {
  value: string;
  text: string;
};

export const CounterItem = ({ value, text }: CounterItemProps) => {
  return (
    <div className="text-center flex flex-col gap-2 bg-gray-400 rounded-2xl py-6 px-2">
      <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
      <p className="text-2xl md:text-sm font-bold text-white">{text}</p>
    </div>
  );
};
