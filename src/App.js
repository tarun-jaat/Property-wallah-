import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ApartmentDetails from "./components/ApartmentDetails";
import AppartmentDetailsPage from "./Pages/AppartmentDetailsPage"
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppartmentDetailsPage />} />
        <Route path="/Details" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;
