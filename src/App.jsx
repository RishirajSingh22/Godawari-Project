import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import WOW from "wow.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Layout Components
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import ScrollToTop from "./Components/HelperComponent/ScrollToTop";

// Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import InvesterPortfolio from "./Pages/InvesterPortfolio";
import Sustainability from "./Pages/Sustainability";
import WeOffer from "./Pages/WeOffer";
import Companies from "./Pages/Companies";
import MediaPublication from "./Pages/MediaPublication";
import FinancialOvervie from "./Pages/FinancialOvervie";
import IvesterMediaReports from "./Pages/IvesterMediaReports";
import InvestorMediaFinancial from "./Pages/InvestorMediaFinancial";
import CommunityEducation from "./Pages/CommunityEducation";
import Welfare from "./Pages/Welfare";
import Infrastructure from "./Pages/infraStructure";
import HealthCare from "./Pages/HealthCare";
import BussinessBillets from "./Pages/BussinessBillets";
import HbWires from "./Pages/HbWires";
import SpongeIron from "./Pages/SpongeIron";
import WireRod from "./Pages/WireRod";
import { Pellets } from "./Pages/Pellets";
import Energy from "./Pages/Energy";
import Ferroalloys from "./Pages/Ferroalloys";
import Mining from "./Pages/Mining";
import OurSustainabilty from "./Pages/OurSustainabilty";
import OHS from "./Pages/OHS";
import BusinessHome from "./Pages/BussinessHome";
import Steel from "./Pages/Steel";
import ComunityEnviroment from "./Pages/ComunityEnviroment";
import CommunityWomenEmpowerment from "./Pages/CommunityWomenEmpowerment";
import Sports from "./Pages/Sports";
import EcosystemMain from "./Pages/EcosystemMain";
import PeopleCareer2 from "./Pages/PeopleCareer2";
import LeadershipBOD from "./Pages/LeadershipBOD";
import LeadershipCommities from "./Pages/LeadershipCommities";
import PeopleOverview from "./Pages/PeopleOverview";
import ComunityOverview from "./Pages/ComunityOverview";
import { StructureBussiness } from "./Pages/StructureBussiness";
import BussinessPoles from "./Pages/BussinessPoles";
import Pipes from "./Pages/Pipes";
import SocialMain from "./Pages/SocialMain";

const App = () => {
 
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
        easing: "ease-in-out",
      });
  
 
      AOS.refresh();
    }, []);
  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="*" element={<AboutUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/investerportfolio" element={<InvesterPortfolio />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/weoffer" element={<WeOffer />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/leadershipBdo" element={<LeadershipBOD />} />
        <Route path="/ecosystem" element={<EcosystemMain />} />
        <Route path="/peopleCareer" element={<PeopleCareer2 />} />
        <Route path="/peopleoverview" element={<PeopleOverview />} />
        <Route path="/leadershipcommittees" element={<LeadershipCommities />} />
        <Route path="/mediapublication" element={<MediaPublication />} />
        <Route path="/financialoverview" element={<FinancialOvervie />} />
        <Route path="/investormediareports" element={<IvesterMediaReports />} />
        <Route path="/investormediafinancial" element={<InvestorMediaFinancial />} />
        <Route path="/communityeducation" element={<CommunityEducation />} />
        <Route path="/welfare" element={<Welfare />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/bussinessbillets" element={<BussinessBillets />} />
        <Route path="/hbwires" element={<HbWires />} />
        <Route path="/spongeiron" element={<SpongeIron />} />
        <Route path="/wirerods" element={<WireRod />} />
        <Route path="/pellets" element={<Pellets />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/ferroalloys" element={<Ferroalloys />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/oursustainability" element={<OurSustainabilty />} />
        <Route path="/ohs" element={<OHS />} />
        <Route path="/businessoverview" element={<BusinessHome />} />
        <Route path="/steel" element={<Steel />} />
        <Route path="/comunityEnviroment" element={<ComunityEnviroment />} />
        <Route path="/womenempowerment" element={<CommunityWomenEmpowerment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/communityoverview" element={<ComunityOverview />} />
        <Route path="/structurebussiness" element={<StructureBussiness />} />
        <Route path="/bussinesspoles" element={<BussinessPoles />} />
        <Route path="/pipes" element={<Pipes />} />
        <Route path="/social" element={<SocialMain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
