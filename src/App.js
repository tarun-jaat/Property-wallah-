import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ApartmentDetails from "./components/ApartmentDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ApartmentDetails />} />
      </Routes>
    </div>
  );
}
export default App;
