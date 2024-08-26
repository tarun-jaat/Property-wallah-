import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react"
import AppartmentDetailsPage from "./Pages/AppartmentDetailsPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
import ChooseProjectPage from "./Pages/ChooseProjectPage";
import AllReviewResidents from "./components/AllReviewResidents";
import WriteReview from "./components/WriteReview";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppartmentDetailsPage />} />
        <Route path="/all-reviews" element={<AllReviewResidents />} />
        <Route path="/write-review" element={<WriteReview />} />
        <Route path="/projects" element={<ProjectDetailsPage />} />
        <Route path="/choose" element={<ChooseProjectPage />} />
      </Routes>
    </div>
  );
}
export default App;
