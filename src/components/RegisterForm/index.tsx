import { ChangeEvent, useState } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../data";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const RegisterForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  const [inputArr, setInputArr] = useState(formInputList);

  // ** Handlers
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // ** Renders
  const renderFormInputList = inputArr.map((input, idx) => (
    <div style={{ display: "flex", alignItems: "center" }} key={idx}>
      <div className="input-wrapper">
        <label htmlFor={input.id}>{input.label}:</label>
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
      <button
        onClick={() => {
          const filtered = inputArr.filter(input => input.name !== formInputList[idx]["name"]);
          console.log(`Remove ${idx}`);
          setInputArr(filtered);
        }}
      >
        ❌ {idx}
      </button>
    </div>
  ));

  return (
    <div>
      <h2
        style={{ backgroundColor: "#af0606", width: "fit-content", margin: "20px auto", padding: 5, borderRadius: 10 }}
      >
        DON'T USE THE `IDX` AS A KEY IN THIS EXAMPLE
      </h2>
      <p style={{ width: "fit-content", margin: "20px auto", fontWeight: "bold" }}>
        This repo create for section 1 (React.js Basics + TypeScript) for beginners
      </p>
      <form
        className="login-form"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        {renderFormInputList}
        <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>
      </form>
    </div>
  );
};

export default RegisterForm;
