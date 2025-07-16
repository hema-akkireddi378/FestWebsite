import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Spinner from "./Spinner"
import axios from "axios";
export default function Register() {

    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");


        if (password !== confirmPassword) {
            setErrorMessage("Password do not match");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(
                "https://festwebsitebackend.onrender.com/register",
                {
                    userName,
                    email,
                    password,
                    confirmPassword
                }
            );

            console.log("Signup Success", response.data);
            setTimeout(() => {
                setLoading(false);
                navigate("/Home");
            }, 2000);
        }
        catch (error) {
            console.error("SignUp error:", error);
            setLoading(false);

            if (error.response) {
                const { status, data } = error.response;

                if (status === 409) {
                    setErrorMessage("Email already registered");
                } else if (status === 401) {
                    setErrorMessage(data);
                }
                else if (status === 500) {
                    setErrorMessage("Email already registered  ");
                } else {
                    setErrorMessage(data || "SignUp failed");
                }
            } else {
                setErrorMessage("Network error ,please try again");
            }
        }
    };


    return (

        <>
            {loading ? (
                <Spinner />

            ) : (
                <div className="main-register">
                    <div className="outer-register-div">
                        <form onSubmit={handleSubmit}>
                            <div className="register-elements">
                                <input type="text" placeholder="UserName" name="userName" id="username" className="login-details" value={userName}
                                    onChange={(e) => setUserName(e.target.value)}></input>
                                <input type="email" placeholder="E-mail address" name="email" id="email" className="login-details" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required ></input>
                                <input type="password" placeholder="Password" name="password" id="password" className="login-details" value={password}
                                    onChange={(e) => setPassword(e.target.value)} required></input>
                                <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" className="login-details" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} required></input>


                            </div>
                            <div className="verify-div">
                                <input type="checkbox" id="verifyHuman" required />
                                <label htmlFor="verifyHuman" className="verify-content"><span>Verify you are human</span></label>
                            </div>
                            <div className="sing-up">

                                <button type="submit" className="sign-up-con"><span>Sign Up</span></button>

                            </div>
                            {errorMessage && (
                                <p className="error-message" style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
                                    {errorMessage}
                                </p>
                            )}

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