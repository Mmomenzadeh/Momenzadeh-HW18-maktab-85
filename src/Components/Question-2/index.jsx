import "./Question-2.css";

const Question2 = () => {
  return (
    <div className="Question2-app">
      <div className="color-container">
        <p>RED</p>
        <div className="rgb">
          <button onClick={()=>dispatch()}>
            increase Red
          </button>
          <button onClick={()=>dispatch()}>
            decrease Red
          </button>
        </div>
        <p>Green</p>
        <div className="rgb">
          <button onClick={()=>dispatch()}>
            increase Green
          </button>
          <button onClick={()=>dispatch()}>
            decrease Green
          </button>
        </div>
        <p>Blue</p>
        <div className="rgb">
          <button onClick={()=>dispatch()}>
            increase blue
          </button>
          <button onClick={()=>dispatch()}>
            decrease blue
          </button>
        </div>

        <div className="color">
          <div
            className="palette"
            style={{
              backgroundColor: ` rgb()`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
