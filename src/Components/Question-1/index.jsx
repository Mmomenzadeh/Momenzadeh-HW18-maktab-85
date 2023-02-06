import { useState } from "react";
import "./Question-1.css";

const Question1 = () => {
  const [colors, setColors] = useState([]);

  const renderColorHandler = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const generateColor = {
      red,
      green,
      blue,
    };

    setColors([...colors, generateColor]);
  };
  return (
    <div className="Question1">
      <div className="generate-color">
        <button onClick={renderColorHandler}>Add Color</button>
        <div className="color-container">
          {colors.map((color, index) => {
            return (
              <div className="color" key={index}>
                <div
                  className="background-color"
                  style={{
                    backgroundColor: ` rgb(${color.red} ,${color.green} ,${color.blue})`,
                  }}
                ></div>
                <p className="rgb-color">
                  {" "}
                  rgb{`(${color.red} ,${color.green} ,${color.blue})`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question1;
