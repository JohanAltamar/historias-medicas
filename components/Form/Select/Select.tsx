import React, { FC } from "react";
import classnames from "classnames";

export interface SelectOption
  extends React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  options: SelectOption[];
  selectFirst?: boolean;
  orientation?: "horizontal" | "vertical";
}

export const Select: FC<SelectProps> = ({
  name,
  id,
  label,
  options,
  selectFirst = false,
  orientation = "horizontal",
  ...props
}) => {
  return (
    <div
      className={classnames("flex", {
        "flex-col": orientation === "vertical",
        "flex-row items-center": orientation === "horizontal",
        "flex-row-reverse": orientation === "horizontal" && selectFirst,
      })}
    >
      <label
        htmlFor={id}
        className={classnames({
          "ml-2": selectFirst,
          "mr-2": !selectFirst,
        })}
      >
        {label}
      </label>
      <select
        className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={name}
        id={id}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
