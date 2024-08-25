import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react"
import AppartmentDetailsPage from "./Pages/AppartmentDetailsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppartmentDetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;
