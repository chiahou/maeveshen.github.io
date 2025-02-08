import "./styles.css";
import planet from "./planet.svg";
import satellite from "./satellite.svg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        Welcome to <br /> Glints Managed Talent
      </h1>
      <h2>
        Start your journey by selecting an option from the menu on your left
      </h2>
      <div>
        <img src={satellite} alt="satellite" className="satellite" />
        <img src={planet} alt="planet" className="planet" />
      </div>
    </div>
  );
}
