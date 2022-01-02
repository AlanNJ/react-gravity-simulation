import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";
import "./components/index.css";
import { About } from "./components/About";

function App() {
	const [gravity, setGravity] = useState(0.98);
	const [friction, setFriction] = useState(0.99);
	const [balls, setBalls] = useState(100);
	var style;

	return (
		<>
			<p>Gravity Balls Simulation</p>
			<div className="App">
				<Settings
					gravity={gravity}
					setGravity={setGravity}
					friction={friction}
					setFriction={setFriction}
					balls={balls}
					setBalls={setBalls}
				/>
				<Canvas gravity={gravity} friction={friction} balls={balls} />
			</div>
			<About />
		</>
	);
}

export default App;
