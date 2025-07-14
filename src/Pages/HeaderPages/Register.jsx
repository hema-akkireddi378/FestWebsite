import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Spinner from "./Spinner"
import axios from "axios";
export default function Register() {

    const [loading,setLoading] = useState(false);
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


     const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true); 

    setTimeout(() => {
      setLoading(false); // Hide spinner
    
      navigate("/Home"); 
    }, 2000);
  };
    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     setErrorMessage("");


    //     if(password!==confirmPassword){
    //         setErrorMessage("Password do not match");
    //         return;
    //     }

    //     try{
    //         const response = await axios.post(
    //             "http://localhost:8081",
    //             {
    //             username,
    //             email,
    //             password,
    //             }
    //         )
    //     }
    //     catch(error){
    //         console.error("SignUp error:", error);
    //         setLoading(false);

    //         if(error.response){
    //             const{status, data} =error.response;

    //             if(status===409){
    //                 setErrorMessage("Email already registered");
    //             }else if(status === 500){
    //                 setErrorMessage("Server error, please try again ");
    //             }else{
    //                 setErrorMessage(data || "SignUp failed");                }
    //         }else{
    //             setErrorMessage("Network error ,please try again");
    //         }
    //     }
    // };


    return (

        <>
        {loading?(
            <Spinner/>

        ):(
        <div className="main-register">
            <div className="outer-register-div">
                <form onSubmit={handleSubmit}>
                    <div className="register-elements">
                        <input type="text" placeholder="UserName" name="userName" id="username" className="login-details" ></input>
                        <input type="email" placeholder="E-mail address" name="email" id="email" className="login-details" required ></input>
                        <input type="password" placeholder="Password" name="password" id="password" className="login-details" required></input>
                        <input type="password" placeholder="Confirm password" name="confirmpassword" id="confirmpassword" className="login-details" required></input>


                    </div>
                    <div className="verify-div">
                        <input type="checkbox" id="verifyHuman" required />
                        <label htmlFor="verifyHuman" className="verify-content"><span>Verify you are human</span></label>
                    </div>
                    <div className="sing-up">

                        <button type="submit" className="sign-up-con"><span>Sign Up</span></button>

                    </div>
                    <div className="signin">
                        <p className="sign-in">Have an account,</p>
                        <Link to="/SignIn" className="sign-in-link">Sign in</Link>

                    </div>
                    <p className="other">or you can sign in with,</p>

                    <div className="social-media">
                        <img src="https://img.icons8.com/?size=100&id=118466&format=png&color=1A1A1A" alt="Facebook logo" className="facebook-link" height="30px" width="40%"></img>
                        <img src="https://img.icons8.com/?size=100&id=17935&format=png&color=1A1A1A" alt="Google logo" className="google-link" height="30px" width="40px"></img>
                    </div>
                </form>
            </div>

        </div>
    )}
    </>
    );
    
}