import Input from "../Input/Input";
import Select from "../Select/Select";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useState } from "react";

const Form = () => {
  const [errorField, setErrorField] = useState(false);
  const [inputVals, setInputVals] = useState({
    name: { value: "" },
    minAge: { value: "" },
    maxAge: { value: "" },
    gender: { value: "" },
    country: { value: "" },
    region: { value: "" },
  });

  let age = [];
  for (let i = 16; i < 80; i++) {
    age.push(i);
  }

  const changeValHandler = (e, name) => {
    if (!name) {
      const { value, name } = e.target;
      const updatedInputVal = { ...inputVals, [name]: { value, error: "" } };
      setInputVals(updatedInputVal);
    } else {
      setInputVals({ ...inputVals, [name]: { value: e, error: "" } });
    }
  };

  const creatingCampignHandler = (e) => {
    e.preventDefault();
    let allValid = [];
    for (let key in inputVals) {
      allValid.push(!!inputVals[key].value);
    }

    const err = allValid.some((v) => !v);
    setErrorField(err);
    if (err) {
      return;
    } else {
      console.log("Create new Campaign.");
    }
  };

  return (
    <form onSubmit={creatingCampignHandler} className="p-8 h-maxcontent">
      {errorField && (
        <p className="text-red-500 mb-2 capitalize  ">
          All fields are required.
        </p>
      )}
      <Input
        value={inputVals["name"].value}
        changeVal={changeValHandler}
        type="text"
        placeholder="Name"
        label="Campaign Name"
        name="name"
      />
      <div className="flex">
        <Select
          label="Min Age"
          style={{ width: "50%", marginRight: "1rem" }}
          options={age}
          name={"minAge"}
          changeVal={changeValHandler}
          // value={inputVals["minAge"].value}
        />
        <Select
          changeVal={changeValHandler}
          name="maxAge"
          label="Max Age"
          style={{ width: "50%" }}
          options={age}
          minAge={inputVals["minAge"].value}
          setInputVals={setInputVals}
          value={inputVals["maxAge"].value}
        />
      </div>
      <Select
        // value={inputVals["gender"].value}
        name="gender"
        label="Gender"
        changeVal={changeValHandler}
        options={["Male", "Female", "Both "]}
      />
      <div className="flex flex-col">
        <div className="my-2">
          <label htmlFor="">Country</label>
          <CountryDropdown
            classes="dropdown"
            onChange={(val) => changeValHandler(val, "country")}
            value={inputVals["country"].value}
          />
        </div>
        <div className="my-2">
          <label className="block" htmlFor="">
            Region
          </label>
          <RegionDropdown
            country={inputVals["country"].value}
            classes="dropdown"
            onChange={(val) => changeValHandler(val, "region")}
            disabled={inputVals["country"].value ? false : true}
            value={inputVals["region"].value}
          />
        </div>
      </div>
      <button className="w-full block bg-green-500 px-4 py-2 mt-4 text-white">
        Create Campaign
      </button>
    </form>
  );
};

export default Form;
