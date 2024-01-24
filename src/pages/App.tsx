import "./styles.css";
import Homepage from "./Homepage";
import { DroneOperator } from "./DroneOperator/drone-operator";
import ResponsiveAppBar from "../components/app_bar";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/DroneOperator" element={<DroneOperator />} />
      </Routes>
    </div>
  );
}
