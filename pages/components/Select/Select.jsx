import { useEffect } from "react";

const Select = ({ options, style, label, changeVal, value, name, minAge }) => {
  useEffect(() => {
    if (minAge) {
      const obj = { target: { value: parseInt(minAge) + 1, name: "maxAge" } };
      changeVal(obj);
    }
  }, [minAge]);

  const renderOptions = options.map((o) => {
    return (
      <option
        selected={parseInt(value) === parseInt(o)}
        className="cursor-pointer"
        disabled={minAge && minAge >= o}
        key={o}
      >
        {o}
      </option>
    );
  });
  return (
    <div className="mt-2 " style={style}>
      <label>{label}</label>
      <select
        onChange={changeVal}
        value={value}
        className="bg-green-300 w-full my-2 p-2 cursor-pointer"
        name={name}
      >
        <option selected disabled hidden>
          Select An Option
        </option>
        {renderOptions}
      </select>
    </div>
  );
};

export default Select;
