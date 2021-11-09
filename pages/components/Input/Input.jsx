const Input = ({ type, label, placeholder, changeVal, name, value }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => changeVal(e)}
        className="border-2 border-black px-4 py-2 mt-2 w-full"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
