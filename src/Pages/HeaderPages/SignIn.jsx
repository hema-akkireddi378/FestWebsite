import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
export default function SignIn() {


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      navigate("/Home"); // redirect anywhere you want
    }, 1500);
  };

   if (loading) {
    return <Spinner />;
  }



    return (

        <>
      {loading && <Spinner />}
        <div className="main-SignIn">
            <div className="register">
                <form onSubmit={handleSubmit}>
                <div className="register-elements">
                    
                    <input type="text" placeholder="UserName" name="username" id="username" className="login-details">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="login-details">
                    </input>
                    <div className="forget-div">
                        <Link to="/ForgotPassword" className="forgot-link">Forgot Password?</Link>
                    </div>
                    <div className="sing-in">
                            <button type="submit" className="sign-in-con"><span>Sign In</span></button>
                    </div>
                    
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
        </>
    )
    
}
