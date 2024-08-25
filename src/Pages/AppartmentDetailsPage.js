import React from "react";
import '../App.css'
import ImageStack from "../components/ImageStack";
import OwnerDetails from "../components/OwnerDetails";
import ApartmentHead from "../components/ApartmentHead";
import Location from "../components/Location";
import Construction from "../components/Construction";
import ApartmentDetails from "../components/ApartmentDetails";
import FloorPlans from "../components/FloorPlans";
import Contact from "../components/Contact";
import ContactCards from "../components/ContactCards";
import Facilities from "../components/Facilities";
import MoreAbout from "../components/MoreAbout";
import LocalityReview from "../components/LocalityReview";
import ResidentReview from "../components/ResidentReview";
import SideCard from "../components/SideCard";
import Header from "../components/Header";

function AppartmentDetailsPage() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Header/>
        <ImageStack />
        <OwnerDetails />
        <Construction />
        <ApartmentHead />
        <ApartmentDetails />
        <FloorPlans />
        <Contact />
        <ContactCards />
        <Facilities />
        <Location />
        <MoreAbout />
        <LocalityReview />
        
        <ResidentReview />
        
      </div>
      <SideCard />
    </div>
  );
}

export default AppartmentDetailsPage;
