import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const About = () => {
	return (
		<div className="about-container">
			<p>
				This is the gravity simulation app made in a consideration that anything
				that has mass is impacted by gravity. Objects with more mass have more
				gravity. Gravity also gets weaker with distance. So, the closer objects
				are to each other, the stronger their gravitational pull is.
				<br />
				Due to this phenomena every objects left in a free space drops down to
				the ground level as it is attracted toward the center of the earth.
				<br />
				With the gravitational force applying on an object while leaving in a
				free space and the loss of energy by an object when it comes in contact
				with the ground due to friction is the main points taken in
				consideration while buiilding this app. However,resistance due to air is
				neglected This app is built with Canvas,JavaScript,React and Physics.
			</p>
			<p>Liked it ? Support me by just giving a star on this repository</p>
			<a href="https://github.com/AlanNJ/react-gravity-simulation.git">
				<AiFillGithub className="git" />
			</a>
		</div>
	);
};
