import React from "react";
import INFO from "../../data/user";

import "./styles/education.css";

const Education = () => {
	return (
		<React.Fragment>
			{INFO.education.map((edu, index) => (
				<div className="homepage-education" key={index}>
					<div className="homepage-education-content">
						<div className="homepage-education-school">
							|&nbsp;&nbsp;&nbsp;{edu.school}
						</div>
						<div className="homepage-education-degree">{edu.degree}</div>
						<div className="homepage-education-field">{edu.field}</div>
						<div className="homepage-education-description">
							{edu.description}
						</div>
						<div className="homepage-education-duration">
							{edu.startYear} - {edu.endYear}
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default Education;
