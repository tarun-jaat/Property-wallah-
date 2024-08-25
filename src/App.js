import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react"
import AppartmentDetailsPage from "./Pages/AppartmentDetailsPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppartmentDetailsPage />} />
        <Route path="/projects" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;
