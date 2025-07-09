import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Footer() {
    const loc = useLocation();

    switch (loc.pathname) {

        case "/":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="TermsAndConditions" className="bottomFooter-links">Terms</Link>
                    </li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="Privacy" className="bottomFooter-links">Privacy</Link>
                    </li>
                </div>
            )
            break;
        case "/Register":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="TermsAndConditions" className="bottomFooter-links">Terms</Link>
                    </li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="Privacy" className="bottomFooter-links">Privacy</Link>
                    </li>
                </div>
            );
            break;
        case "/SignIn":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="TermsAndConditions" className="bottomFooter-links">Terms</Link>
                    </li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="Privacy" className="bottomFooter-links">Privacy</Link>
                    </li>
                </div>
            );
            break;
        case "/TermsAndConditions":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="Privacy" className="bottomFooter-links">Privacy</Link>
                    </li>
                </div>
            );
            break;
        case "/Privacy":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="TermsAndConditions" className="bottomFooter-links">Terms</Link>
                    </li>
                </div>
            );
            break;
        case "/AboutFest":
            return (
                <div className="bottomFooter">
                    <li className="footer-bottom-2">Copyright &copy; 2025</li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="TermsAndConditions" className="bottomFooter-links">Terms</Link>
                    </li>
                    <li className="footer-bottom-2">|</li>
                    <li className="footer-bottom-2">
                        <Link to="Privacy" className="bottomFooter-links">Privacy</Link>
                    </li>
                </div>
            );
            break;

        default:
            return (

                <div className="footer">
                    <nav className="footernav">
                        <ul className="footerul">
                            <div className="admin-list">
                                <li className="admin-list"><h2>Admin Panel</h2></li>
                                <li className="admin-list">
                                    <Link to="/FacultyDashboard" className="admin-links">Faculty DashBoard</Link>
                                </li>
                                {/* <li ><Link to="/StudentDashboard" className="admin-links">Student Dashboard</Link></li> */}
                                <li className="admin-list" ><Link to="/EventCoordinator" className="admin-links">Event Coordinator Dashboard</Link></li>
                                <li className="admin-list"><Link to="/Assignment" className="admin-links">Voolenter's Assignment</Link></li>
                                {/* <li ><Link to="/Support" className="admin-links">Support & QA</Link></li> */}
                                <li className="admin-list"><Link to="/Certificate" className="admin-links">Album Download</Link></li>
                            </div>
                            <div className="gamification">
                                <li className="gamification"><h2>Gamification</h2></li>
                                <li className="gamification"><Link to="/Sports" className="gamification-links">Sprots</Link></li>
                                <li className="gamification"><Link to="/TechnicalEvents" className="gamification-links">Technical Events</Link></li>
                                <li className="gamification"><Link to="/CulturalEvents" className="gamification-links">Cultural Events</Link></li>
                            </div>
                            <div className="gallery">
                                <li className="gallery"><h2>Gallery & Sponsers</h2></li>
                                <li className="gallery"><Link to="/Sponser" className="gallery-links">Sponser Logos and Offers</Link></li>
                                <li className="gallery"><Link to="/StallsInfo" className="gallery-links">Food Stalls</Link></li>
                                {/* <li className="gallery"><Link to="LiveEvent" className="gallery-links">Live Event Tracker</Link></li>
                                <li className="gallery"><Link to="/PreviousFest" className="gallery-links">Previous Fest Info</Link></li>
                                 */}
                                <li className="gallery"><Link to="/AboutFest" className="gallery-links">About Fest</Link></li>
                            </div>
                            <div className="support">
                                <li className="support"><h2>Support & Accessibility</h2></li>
                                <li className="support"><Link to="/faq" className="support-links">FAQ Section</Link></li>
                                <li className="support"><Link to="/Emergency" className="support-links">Emergency Contact</Link></li>
                                <li className="support"><Link to="/LiveChat" className="support-links">Live Chat Support</Link></li>
                            </div>
                            <div className="post-fest">
                                <li className="post-fest"><h2>Post-Fest</h2></li>
                                <li className="post-fest"><Link to="FeedbackForm" className="post-fest-links">FeedBack Form</Link></li>
                                <li className="post-fest"><Link to="/ResultsAndWinners" className="post-fest-links">Results & Winner Display</Link></li>
                                {/* <li className="post-fest"><Link to="/TermsAndConditions" className="post-fest-links">Terms and Conditions</Link></li>
                                <li className="post-fest"><Link to="/ContactUs" className="post-fest-links">Results And Winners</Link></li>
                                <li className="post-fest"><Link to="/Privacy" className="post-fest-links">Privacy Policy</Link></li> */}
                                <li className="post-fest"><Link to="/AboutUs" className="post-fest-links">About Us</Link></li>
                                <li className="post-fest"><Link to="/ContactUs" className="post-fest-links">Contact Us</Link></li>
                                <li className="post-fest"><Link to="/archive" className="post-fest-links">Archive of past Events</Link></li>
                            </div>

                           
                        </ul>
                          <div className="bottomFooter">
                                <li className="footer-bottom-2">Copyright &copy; 2025</li>
                               
                            </div>
                    </nav>
                   

                </div>
            )
    }
}
