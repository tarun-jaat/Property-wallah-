import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react"
import AppartmentDetailsPage from "./Pages/AppartmentDetailsPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
import ChooseProjectPage from "./Pages/ChooseProjectPage";
import AllReviewResidents from "./components/AllReviewResidents";
import WriteReview from "./components/WriteReview";
import FilterSlideBar from "./Indrajeet/Screens/FilterSlideBar";
import PropertyList from "./Indrajeet/Screens/PropertyList";
import PropertyDetail from "./Indrajeet/Screens/PropertyDetail";
import Navbar from "./Indrajeet/Components/Navbar";
import FAQ from "./Indrajeet/Screens/FAQ";
function App() {
  
  return (
    <div className="app-container">
      <Navbar/>
      <div className="main-layout">
      <FilterSlideBar/>
      <div className="content-container">
      <Routes>
        <Route path="/" element={<PropertyList/>}></Route>
       
        <Route path="/property/:id" element={<PropertyDetail/>}></Route>
        <Route path="/all-reviews" element={<AllReviewResidents />} />
        <Route path="/write-review" element={<WriteReview />} />
        <Route path="/projects" element={<ProjectDetailsPage />} />
        <Route path="/choose" element={<ChooseProjectPage />} />
      
      </Routes>
      </div>
    </div>
    <div className="faq">
    <FAQ/>
    </div>
    </div>
  );
}
export default App;
