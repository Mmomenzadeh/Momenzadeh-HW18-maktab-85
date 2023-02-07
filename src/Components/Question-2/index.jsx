import { useReducer } from "react";
import "./Question-2.css";

function reducer( initialColor , action) {
    switch (action.type) {
      case "increaseRed":
        if ( rgbValue.red < 256) {
        return {...initialColor, red : initialColor.red + 5}
        }
      case "decreaseRed":
        if (rgbValue.red >= 0 ) {
        return {...initialColor , red : initialColor.red -5}
        }
      case "increaseGreen":
        return {...initialColor , green : initialColor.green + 5};
      case "decreaseGreen":
        return {...initialColor , green : initialColor.green -5}
      case "increaseblue":
        return {...initialColor , blue : initialColor.blue +5}
      case "decreaseblue":
        return {...initialColor , blue : initialColor.blue -5}
  
      default:
        return initialColor;
    }
  };


const Question2 = () => {

   
const [initialColor, dispatch] = useReducer(reducer, {red: 100,green: 100,blue: 100,});

  return (
    <div className="Question2-app">
      <div className="color-container">
        <p>RED</p>
        <div className="rgb">
          <button onClick={() => dispatch({ type: "increaseRed" })}>
            increase Red
          </button>
          <button onClick={() => dispatch({ type: "decreaseRed" })}>
            decrease Red
          </button>
        </div>
        <p>Green</p>
        <div className="rgb">
          <button onClick={() => dispatch({ type: "increaseGreen" })}>
            increase Green
          </button>
          <button onClick={() => dispatch({ type: "decreaseGreen" })}>
            decrease Green
          </button>
        </div>
        <p>Blue</p>
        <div className="rgb">
          <button onClick={() => dispatch({ type: "increaseblue" })}>
            increase Blue
          </button>
          <button onClick={() => dispatch({ type: "decreaseblue" })}>
            decrease Blue
          </button>
        </div>

        <div className="color">
          <div
            className="palette"
            style={{
              backgroundColor: ` rgb(${initialColor.red} , ${initialColor.green} , ${initialColor.blue})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
