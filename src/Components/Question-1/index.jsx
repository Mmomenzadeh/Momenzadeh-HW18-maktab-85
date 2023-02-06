import { useState } from "react"
import "./Question-1.css"

const Question1 = ()=>{

    const [colors , setColors] = useState([])

    const renderColorHandler=()=>{}
    return(
        <div className="Question1">
            <div className="generate-color">
                <button onClick={renderColorHandler}>Add Color</button>
                <div className="color-container">

                <div className="color">
                        <div className="background-color"></div>
                        <p className="rgb-color">rgb(100,100,100)</p>
                    </div>

                

                </div>
            </div>
        </div>
    )
}

export default Question1