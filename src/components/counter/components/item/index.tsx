"use client";

export type CounterItemProps = {
  value: string;
  text: string;
};

export const CounterItem = ({ value, text }: CounterItemProps) => {
  return (
    <div className="text-center flex flex-col gap-1 md:gap-2 bg-gray-400 rounded-2xl py-4 md:py-6 px-2">
      <p className="text-xl md:text-3xl font-bold text-white">{value}</p>
      <p className="text-[10px] md:text-sm font-bold text-white">{text}</p>
    </div>
  );
};
