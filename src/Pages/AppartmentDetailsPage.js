import react from 'react'
import ApartmentDetails from '../components/ApartmentDetails';
import ApartmentHead from '../components/ApartmentHead';
import ImageStack from "../components/ImageStack";
import OwnerDetails from '../components/OwnerDetails';
import SideCard from '../components/SideCard';
import Construction from '../components/Construction';
import FloorCards from '../components/FloorCards';
import FloorPlans from '../components/FloorPlans';
import Contact from '../components/Contact';
import ContactCards from '../components/ContactCards';
import FacilityCards from '../components/FacilityCard';
import Facilities from '../components/Facilities';
import Location from '../components/Location';
import MoreAbout from '../components/MoreAbout';
import LocalityReview from '../components/LocalityReview';
import ResidentReview from '../components/ResidentReview';
import PlacesCard from '../components/PlacesCard';
function AppartmentDetailsPage() {
    return (
        <>
        <div className="app-container">
      <div className="main-content">
        <ImageStack/>
        <OwnerDetails/>
        <Construction/>
        <ApartmentHead/>
        <ApartmentDetails/> 
        <FloorPlans/>
        <Contact/>
        <ContactCards/>
        <Facilities/>
        <Location/>
        <MoreAbout/>
        <LocalityReview/>
        <ResidentReview/>
        <PlacesCard/>
      </div>
      <SideCard />
    </div>
        </>
    )
}

 export default AppartmentDetailsPage;
