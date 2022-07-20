import React, { FC } from "react";
import classnames from "classnames";

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
}

export const Textarea: FC<TextareaProps> = ({
  id,
  label,
  name,
  className,
  ...props
}) => {
  const classNames = classnames(
    className,
    "rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  );
  return (
    <div>
      <label htmlFor={id} className="mr-2">
        {label}
      </label>
      <textarea
        rows={2}
        id={id}
        name={name}
        className={classNames}
        {...props}
      />
    </div>
  );
};
