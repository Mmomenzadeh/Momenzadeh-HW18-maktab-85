import { useState } from "react";

const AdjustColor = () => {
  const [rgbValue, setRgbValue] = useState({ red: 100 , green: 100, blue: 100 });

  const changeColorHandeler = (action) => {
    switch (action) {
      case "RedIncrease":
        if ( rgbValue.red < 256) {
          setRgbValue({ ...rgbValue, red: rgbValue.red + 5 });
          console.log(rgbValue.red);

        }
        break;

      case "RedDecrease":
        if (rgbValue.red >=0 ) {
          setRgbValue({ ...rgbValue, red: rgbValue.red - 5 });
          console.log(rgbValue.red);

        }
        break;

      case "GreenIncrease":
        if (rgbValue.green < 256) {
          setRgbValue({ ...rgbValue, green: rgbValue.green + 5 });
        }
        break;

      case "GreenDecrease":
        if (rgbValue.green >= 0) {
          setRgbValue({ ...rgbValue, green: rgbValue.green - 5 });
        }
        break;

      case "BlueIncrease":
        if ( rgbValue.blue < 256) {
          setRgbValue({ ...rgbValue, blue: rgbValue.blue + 5 });
        }
        break;

      case "BlueDecrease":
        if (rgbValue.blue >= 0 ) {
          setRgbValue({ ...rgbValue, blue: rgbValue.blue - 5 });
        }
        break;

      default:
        rgbValue
        break;
    }
  };

  return (
    <div className="Question2-app">
      <div className="color-container">
        <p>RED</p>
        <div className="rgb">
          <button onClick={() => changeColorHandeler("RedIncrease")}>
            increase Red
          </button>
          <button onClick={() => changeColorHandeler("RedDecrease")}>
            decrease Red
          </button>
        </div>
        <p>Green</p>
        <div className="rgb">
          <button onClick={() => changeColorHandeler("GreenIncrease")}>
            increase Green
          </button>
          <button onClick={() => changeColorHandeler("GreenDecrease")}>
            decrease Green
          </button>
        </div>
        <p>Blue</p>
        <div className="rgb">
          <button onClick={() => changeColorHandeler("BlueIncrease")}>
            increase Blue
          </button>
          <button onClick={() => changeColorHandeler("BlueDecrease")}>
            decrease Blue
          </button>
        </div>

        <div className="color">
          <div
            className="palette"
            style={{
              backgroundColor: `rgb(${rgbValue.red},${rgbValue.green},${rgbValue.blue})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AdjustColor;
