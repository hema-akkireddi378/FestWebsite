import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";
export default function SignIn() {


  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("https://festwebsitebackend.onrender.com/signin", {
        email,
        password,
      });

      console.log("Login success:", response.data);
      if (response.status === 200 && response.data === "Login Successful") {
        setTimeout(() => {
          setLoading(false);
          navigate("/Home");
        }, 2000);
      } else {
        setLoading(false);
        setErrorMessage("Login failed. Try again.");
      }

    } catch (error) {
      console.error("SignIn error:", error);
      setLoading(false);

      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          setErrorMessage(data);
        } else {
          setErrorMessage("Server error. Try again later.");
        }
      } else {
        setErrorMessage("Network error. Please check your connection.");
      }
    }
  };





  return (

    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="main-SignIn">
          <div className="register">
            <form onSubmit={handleSubmit}>
              <div className="register-elements">

                <input type="text" placeholder="UserName" name="email" id="email" className="login-details" value={email}
                  onChange={(e) => setEmail(e.target.value)} required>
                </input>
                <input type="password" placeholder="Password" name="password" id="password" className="login-details" value={password}
                  onChange={(e) => setPassword(e.target.value)} required>
                </input>
                <div className="forget-div">
                  <Link to="/ForgotPassword" className="forgot-link">Forgot Password?</Link>
                </div>
                <div className="sing-in">
                  <button type="submit" className="sign-in-con"><span>Sign In</span></button>
                </div>
                {errorMessage && (
                  <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                    {errorMessage}
                  </p>
                )}


              </div>

            </form>
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
      )}
    </>
  )

}
