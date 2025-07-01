
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
// Components 
import { MainHeader } from "./Components/Header";
import { Footer } from "./Components/Footer";

// Landing Page
import LandingPageContent from "./Pages/HeaderPages/LandingPageContent";

// import AnimationPage from "./Pages/HeaderPages/AnimationPage";
// Header Pages
import Home from "./Pages/HeaderPages/Home";
import Events from "./Pages/HeaderPages/Events";
import Register from "./Pages/HeaderPages/Register";
import SignIn from "./Pages/HeaderPages/SignIn";
import MyProfile from "./Pages/HeaderPages/MyProfile";
import ProfileUpdate from "./Pages/HeaderPages/ProfileUpdate"

// Event Pages
import BannerLaunch from "./Pages/HeaderPages/BannerLaunchContent";
import Traditional from "./Pages/HeaderPages/Traditional";
import FinalFest from "./Pages/HeaderPages/FinalFest";

import ProCoder from "./Pages/HeaderPages/ProCoder";
import GuessTheOutPut from "./Pages/HeaderPages/GuessTheOutPut";
import Quiz from "./Pages/HeaderPages/Quiz";
import EssayWriting from "./Pages/HeaderPages/EssayWriting";

import MensCricket from "./Pages/HeaderPages/MensCricket";
// import MensKabaddi from "./Pages/HeaderPages/MenKabaddi";
import MenKhoKho from "./Pages/HeaderPages/MenKhoKho";
import MenVolleyball from "./Pages/HeaderPages/MenVolleyball";
import CarromBoard from "./Pages/HeaderPages/CarromBoard";
import FreeFire from "./Pages/HeaderPages/FreeFire";
import Pubg from "./Pages/HeaderPages/Pubg";
import WomensThrowBall from "./Pages/HeaderPages/WomensThrowball";


import {ProCoderRegistration} from "./Pages/HeaderPages/EventRegistration";
import { GuessTheOutputRegistration } from "./Pages/HeaderPages/EventRegistration";
import { QuizRegistration } from "./Pages/HeaderPages/EventRegistration";
import { EssayWritingRegistration } from "./Pages/HeaderPages/EventRegistration";
import { MensCricketRegistration } from "./Pages/HeaderPages/EventRegistration";
import { MensKabaddiRegistration } from "./Pages/HeaderPages/EventRegistration";
import { MensKhoKhoRegistration } from "./Pages/HeaderPages/EventRegistration";
import { MensVolleyBallRegistration } from "./Pages/HeaderPages/EventRegistration";
import { CarromBoardRegistration } from "./Pages/HeaderPages/EventRegistration";
import { FreeFireRegistration } from "./Pages/HeaderPages/EventRegistration";
import { PubgRegistration } from "./Pages/HeaderPages/EventRegistration";
import { WomensThrowBallRegistration } from "./Pages/HeaderPages/EventRegistration";


// Footer Pages
import FacultyDashboard from "./Pages/FooterPages/FacultyDashboard";
import EventCoordinator from "./Pages/HeaderPages/EventCoordinator";
import StudentDashboard from "./Pages/FooterPages/StudentDashboard";
import Assignment from "./Pages/FooterPages/Assignment";
import Certificate from "./Pages/FooterPages/Certificate";
import Support from "./Pages/FooterPages/Support";

import Sports from "./Pages/FooterPages/Sports";
import TechnicalEvents from "./Pages/FooterPages/TechnicalEvents";
import CulturalEvents from "./Pages/FooterPages/CulturalEvents";

import StallsInfo from "./Pages/FooterPages/StallsInfo";
import LiveEvents from "./Pages/FooterPages/LiveEvent";
import PreviousFest from "./Pages/FooterPages/PreviousFest";
import Sponser from "./Pages/FooterPages/Sponser";
import AboutFest from "./Pages/FooterPages/AboutFest";

import FAQ from "./Pages/FooterPages/FAQ";
import Emergency from "./Pages/FooterPages/Emergency";
import LiveChat from "./Pages/FooterPages/LiveChat";

import FeedbackForm from "./Pages/FooterPages/FeedbackForm";
import ResultsAndWinners from "./Pages/FooterPages/ResultsAndWinners";
import TermsAndConditions from "./Pages/FooterPages/TermsAndConditions";
import Privacy from "./Pages/FooterPages/Privacy";
import AboutUs from "./Pages/FooterPages/AboutUs";
import ContactUs from "./Pages/FooterPages/ContactUs";
import ArchivePastEvents from "./Pages/FooterPages/ArchivePastEvents";
import MenKabaddi from "./Pages/HeaderPages/MenKabaddi";

function App() {
  return (


    <BrowserRouter>
      <MainHeader />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPageContent />}></Route>
        {/* <Route path="/AnimationPage" element={<AnimationPage/>}></Route> */}
        {/* Header Pages */}
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/MyProfile" element={<MyProfile />}></Route>
        <Route path="/ProfileUpdate" element={<ProfileUpdate/>}></Route>
        {/* Event pages */}

        <Route path="/BannerLaunch" element={<BannerLaunch />}></Route>
        <Route path="/Traditional" element={<Traditional />}></Route>
        <Route path='/FinalFest' element={<FinalFest />}></Route>
        <Route path="/ProCoder" element={<ProCoder />}></Route>
        <Route path="/GuessTheOutPut" element={<GuessTheOutPut />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/EssayWriting" element={<EssayWriting />}></Route>
        {/* <Route path="/Cricket1" element={<Criket1/>}></Route> */}
        <Route path="/MensCricket" element={<MensCricket/>}></Route>
        {/* <Route path="/MenKabaddi" element={<MenKabaddi />}></Route> */}
        <Route path="/MenKhoKho" element={<MenKhoKho />}></Route>
        <Route path="/MenVolleyball" element={<MenVolleyball />}></Route>
        <Route path="/CarromBoard" element={<CarromBoard />}></Route>
        <Route path='/FreeFire' element={<FreeFire />}></Route>
        <Route path="/Pubg" element={<Pubg />}></Route>
        <Route path="/WomensThrowBall" element={<WomensThrowBall />}></Route>

        <Route path="/ProCoderRegistration" element={<ProCoderRegistration/>}></Route>
         <Route path="/GuessTheOutputRegistration" element={<GuessTheOutputRegistration />}></Route>
        <Route path="/QuizRegistration" element={< QuizRegistration/>}></Route>
        <Route path='/EssayWritingRegistration' element={<EssayWritingRegistration />}></Route>
        <Route path="/MensCricketRegistration" element={<MensCricketRegistration />}></Route>
        <Route path="/MensKabaddiRegistration" element={<MensKabaddiRegistration />}></Route>
        <Route path="/MensVolleyBallRegistration" element={<MensVolleyBallRegistration/>}></Route>
        <Route path="/MensKhoKhoRegistration" element={<MensKhoKhoRegistration />}></Route>
        <Route path="/CarromBoardRegistration" element={<CarromBoardRegistration />}></Route>
        <Route path="/FreeFireRegistration" element={<FreeFireRegistration />}></Route>
        <Route path="/PubgRegistration" element={<PubgRegistration />}></Route>
        <Route path="/WomensThrowBallRegistration" element={<WomensThrowBallRegistration />}></Route>
        

       
 
        {/* Admin Panel */}

        <Route path='/FacultyDashboard' element={<FacultyDashboard />}></Route>
        <Route path="/EventCoordinator" element={<EventCoordinator/>}></Route>
        <Route path="/StudentDashboard" element={<StudentDashboard />}></Route>
        <Route path="/Assignment" element={<Assignment />}></Route>
        <Route path="/Support" element={<Support />}></Route>
        <Route path="/Certificate" element={<Certificate />}></Route>

        {/* Gamification */}
        <Route path="/Sports" element={<Sports />}></Route>
        <Route path="/TechnicalEvents" element={<TechnicalEvents />}></Route>
        <Route path="/CulturalEvents" element={<CulturalEvents />}></Route>

        {/* Gallery And Sponsers */}
        <Route path="/StallsInfo" element={<StallsInfo />}></Route>
        <Route path="/LiveEvent" element={<LiveEvents />}></Route>
        <Route path="/PreviousFest" element={<PreviousFest />}></Route>
        <Route path="/Sponser" element={<Sponser />}></Route>
        <Route path="/AboutFest" element={<AboutFest />}></Route>

        {/* Sport And Accessibility */}
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/Emergency" element={<Emergency />}></Route>
        <Route path="/LiveChat" element={<LiveChat />}></Route>

        {/* Post Fest */}
        <Route path="/FeedbackForm" element={<FeedbackForm />}></Route>
        <Route path="/ResultsAndWinners" element={<ResultsAndWinners />}></Route>
        <Route path="/TermsAndConditions" element={<TermsAndConditions />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/ArchivePastEvents" element={<ArchivePastEvents />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

