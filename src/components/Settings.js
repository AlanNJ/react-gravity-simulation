import React, { useState } from "react";

export const Settings = ({
	setGravity,
	setFriction,
	setBalls,
	balls,
	friction,
	gravity,
}) => {
	return (
		<div className="setting-container">
			<div className="aligner">
				<input
					value={gravity * 10}
					onChange={(e) => setGravity(e.target.value / 10)}
				/>
				<span>Gravity</span>
			</div>
			<div className="aligner">
				<input
					value={friction}
					placeholder="Enter the Friction You want"
					onChange={(e) => setFriction(e.target.value)}
				/>
				<span>Friction</span>
			</div>
			<div className="aligner">
				<input
					value={balls}
					placeholder="Enter no of balls"
					onChange={(e) => setBalls(e.target.value)}
				/>
				<span>No of balls</span>
			</div>
		</div>
	);
};
export default Settings;
