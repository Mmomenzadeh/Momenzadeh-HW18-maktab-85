import { useReducer } from "react"
import "./App.css"
import AdjustColor from "./Components/AdjustColor/AdjustColor"
import Question1 from "./Components/Question-1"
import Question2 from "./Components/Question-2"
import Question3 from "./Components/Question-3"

const App=()=>{

    

    return(
        <div className="app">
            {/* <Question1/> */}
            <Question2/>
            {/* <Question3/> */}
            {/* <AdjustColor/> */}

        </div>
    )
}


export default App