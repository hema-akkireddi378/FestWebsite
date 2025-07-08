import { useState } from "react"
import { Link } from "react-router-dom"
//import { useNavigate } from "react-router-dom";
export default function Register() {


    return (
        <div className="main-register">
            <div className="outer-register-div">
                <form>
                    <div className="register-elements">
                        <input type="text" placeholder="UserName" name="username" id="username" className="login-details"></input>
                        <input type="email" placeholder="E-mail address" name="email" id="email" className="login-details"></input>
                        <input type="password" placeholder="Password" name="password" id="password" className="login-details"></input>
                        <input type="password" placeholder="Confirm password" name="confirmpassword" id="confirmpassword" className="login-details"></input>
                        
                       
                    </div>
                    <div className="verify-div">
                            <input type="checkbox" id="verifyHuman" required />
                            <label htmlFor="verifyHuman" className="verify-content"><span>Verify you are human</span></label>
                        </div>
                     <div className="sing-up">
                            <button type="submit" className="sign-up-con"><span>Sign Up</span></button>
                        </div>
                    <div className="signin">
                        <p className="sign-in">Have an account</p>
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
    )
}