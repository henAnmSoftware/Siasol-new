import "./styles.css";
import Homepage from "./Homepage";
import { DroneOperator } from "./DroneOperator/drone-operator";

export default function App() {
  return (
    <div className="App">
      <Homepage />
      <DroneOperator />
    </div>
  );
}
