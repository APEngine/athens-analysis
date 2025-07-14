import React from "react";

interface SimpleNumericInputProps {
  title: string;
  id: string;
  name: string;
  classname?: string;
  placeholder?: string;
  value: number;
  onChangeFcn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  orientation?: string;
  max: number;
  min: number;
}

const SimpleNumericInput: React.FC<SimpleNumericInputProps> = ({
  title,
  id,
  name,
  classname = "",
  placeholder = "",
  value,
  onChangeFcn,
  disabled = false,
  orientation = "flex flex-col",
  max,
  min
}) => {
  return (
    <article className={`${orientation} items-start justify-between w-full py-1`}>
      <h3 className="flex flex-row">{title}</h3>
      <section>
        <input
          id={id}
          name={name}
          value={value}
          type="number"
          readOnly={disabled}
          className={`${classname} mr-2`}
          placeholder={placeholder}
          onChange={onChangeFcn}
          min={min}
          max={max}
        />
      </section>
    </article>
  );
};

export default SimpleNumericInput;
