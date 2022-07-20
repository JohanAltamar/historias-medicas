import React, { FC } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  afterInput?: React.ReactNode;
}

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  afterInput,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="mr-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        {...props}
      />
      <span className="ml-2">{afterInput}</span>
    </div>
  );
};
