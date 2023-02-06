import { useState } from "react";
import "./Question-3.css";

const Question3 = () => {
  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name: "",
    fmaily: "",
    email: "",
    userName: "",
  };
  const [inputValue, setInputValue] = useState(newUser);



  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <div className="Auth-form">
      <form style={{ padding: "20px" }} onSubmit={onSubmitHandler}>
        <h2>Create account</h2>
        <p>
          Already have an account ? <a>Sign in</a>
        </p>
        <input
          type="text"
          placeholder="Username"
          value={inputValue.userName}
          onChange={(e) =>
            setInputValue({ ...inputValue, userName: e.target.value })
          }
          required 
        />
        <div className="field-NF">
          <input
            type="text"
            placeholder="Last name "
            value={inputValue.fmaily}
            onChange={(e) =>
              setInputValue({ ...inputValue, fmaily: e.target.value })
            }
            required 
          />
          <input
            type="text"
            placeholder="First Name "
            value={inputValue.name}
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            required 
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          required 
        />

        <button>Sign up</button>

        <div className="field-ChL">
          <input type="checkbox" />
          <label>
            i have read and agree to <a>Terms of Service</a>{" "}
          </label>
        </div>
      </form>
    </div>
  );
};

export default Question3;
