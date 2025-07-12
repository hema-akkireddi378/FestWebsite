import { Link } from "react-router-dom"
export default function SignIn() {
    return (
        <div className="main-SignIn">
            <div className="register">
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="login-details">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="login-details">
                    </input>
                    <div className="forget-div">
                        <Link to="/ForgotPassword" className="forgot-link">Forgot Password?</Link>
                    </div>
                    <div className="sing-in-button">
                        <Link to="/Home">
                            <button type="submit" className="sign-in-con"><span>Sign In</span></button>
                        </Link>
                    </div>
                </div>
                <div className="signin">
                    <p className="signup">
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
