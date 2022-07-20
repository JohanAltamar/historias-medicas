import React, { FC } from "react";

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  value,
  id,
  ...props
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="rounded border-gray-300text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
        {...props}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};
