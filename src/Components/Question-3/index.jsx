import "./Question-3.css"

const Question3 =()=>{

    return(
        <div className="Auth-form">
            <form style={{padding : "20px"}}>
                <h2>Create account</h2>
                <p>Already have an account ? <a>Sign in</a></p>
                <input type="text" placeholder="Username"/>
                <div className="field-NF">
                <input type="text" placeholder="Last name "/>
                <input type="text" placeholder="First Name "/>
                </div>
                <input type="email" placeholder="E-mail"/>

                <button>Sign up</button>

                <div className="field-ChL">
                    <input type="checkbox" />
                    <label> i have read and agree to <a>Terms of Service</a> </label>
                </div>


            </form>
        </div>
    )
}

export default Question3