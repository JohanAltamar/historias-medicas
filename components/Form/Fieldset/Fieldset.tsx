import React, { FC } from "react";
import classnames from "classnames";

export interface FieldsetProps
  extends React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  children: React.ReactNode;
  legend: string;
  required?: boolean;
}
export const Fieldset: FC<FieldsetProps> = ({
  legend,
  children,
  required = false,
  ...props
}) => {
  return (
    <fieldset className="my-5" {...props}>
      <legend
        className={classnames("text-gray-600", {
          "after:content-['*'] after:ml-0.5 after:text-red-500": required,
        })}
      >
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};
