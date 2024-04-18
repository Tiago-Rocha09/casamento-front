'use client'

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick} className="text-white bg-red-700 rounded px-4 py-2 cursor-pointer hover:bg-red-600 w-fit min-w-36 m-auto">{props.text}</button>;
};
