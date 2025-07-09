import { Link, useLocation } from "react-router-dom";

export function MainHeader() {
    const loc = useLocation();

    switch (loc.pathname) {

        case "/Register":
            return (
                <div className='header-outer-div'>
                    <div className="mrcl-code">
                        <h1 className='register-header'>MIRACLE</h1>
                    </div>
                </div>
            )
            break;

        case "/AboutFest":
            return (
                <div className='header-outer-div'>
                    <header className="AboutFestMainHeader">
                        <div className="mrcl-code">
                            <Link to="/" className="back-to-landingpage">
                                <h1 className='register-header'>MIRACLE</h1>
                            </Link>
                        </div>
                    </header>
                </div>
            )
            break;

        case "/TermsAndConditions":
            return (
                <div className='header-outer-div'>
                    <div className="mrcl-code">
                        <Link to="/" className="back-to-landingpage">
                            <h1 className='register-header'>MIRACLE</h1>
                        </Link>
                    </div>
                </div>

            )
            break;
        case "/Privacy":
            return (
                <div className='header-outer-div'>
                    <div className="mrcl-code">
                        <Link to="/" className="back-to-landingpage">
                            <h1 className='register-header'>MIRACLE</h1>
                        </Link>
                    </div>
                </div>
            )
            break;

        case "/SignIn":
            return (
                <div className='header-outer-div'>
                    <div className="mrcl-code">
                        <h1 className='signin-header'>MIRACLE</h1>
                    </div>
                </div>
            )
            break;
        case "/":
            return (
                <div className='header-outer-div'>
                    <div className="mrcl-code">
                        <h1 className='signin-header'>MIRACLE</h1>
                    </div>
                    <div className="landing-header-content">
                        <nav className="mainHeader-nav-elements">
                            <Link to="/AboutFest" className="header-link-aboutfest"><span>About Fest</span></Link>
                            <Link to="/Register" className="header-links-register">Register</Link>
                        </nav>
                    </div>
                </div>
            )

            break;
        default:
            return (
                <div className='home-header-outer-div'>
                    <div className="mrcl-code">
                        <h1 className='main-header'>MIRACLE</h1>
                    </div>
                    <div className="header-content">
                        <nav className="nav-elements">
                            <Link to="/Home" className="header-links">Home</Link>
                            <Link to="/Events" className="header-links">Events</Link>
                            {/* <Link to="/Register" className="header-links">Register</Link> */}
                            <Link to="/AboutUs" className="header-links">About Us</Link>
                            <Link to="/MyProfile" className="header-profile"><img src="https://img.icons8.com/?size=100&id=85050&format=png&color=FFFFFF" alt="Profile" height="15px" width="15px"></img></Link>
                        </nav>
                    </div>
                </div>
            )
    }
}