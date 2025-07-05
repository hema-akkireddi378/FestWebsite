import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="main-register">
            <div className="registe">
                {/* <p className='register'>Register</p> */}
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="login-details">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="login-details">
                    </input>
                    <input type="password" placeholder="Confirm password" name="confirm password" id="confirm password" className="login-details">
                    </input>
                    <input type="email" placeholder="E-mail address" name="email" id="email" className="login-details">
                    </input>
                    <div className="register-details-verify">
                        <input type="checkbox" ></input>
                        <label><span>Verify you are human</span></label>
                    </div>
                    <Link to="/Home" className="login-link">
                    <button type="submit" className="login-button"><span>Sign Up</span></button>
                    </Link>
                </div>
                <div className="signin">
                    <p className="sign-in">Have an account
                        <Link to="/SignIn" className="sign-in-link">Sign in</Link>
                    </p>
                    <p className="other">or you can sign in with,</p>
                </div>
                <div className="social-media">
                   <img src="https://img.icons8.com/?size=100&id=118466&format=png&color=1A1A1A" alt="Facebook logo" className="facebook-link" height="30px" width="40%"></img>
                    <img src="https://img.icons8.com/?size=100&id=17935&format=png&color=1A1A1A" alt="Google logo" className="google-link" height="30px" width="40px"></img>
                </div>

            </div>
        </div>
    )
}