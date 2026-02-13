import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/education.css";

const Education = () => {
	return (
		<Card
			icon={faGraduationCap}
			title="Education"
			body={
				<div className="education-body">
					{INFO.education.map((edu, index) => (
						<div className="education-item" key={index}>
							<div className="education-school">{edu.school}</div>
							<div className="education-degree">{edu.degree}</div>
							<div className="education-field">{edu.field}</div>
							<div className="education-description">{edu.description}</div>
							<div className="education-duration">
								{edu.startYear} - {edu.endYear}
							</div>
						</div>
					))}
				</div>
			}
		/>
	);
};

export default Education;
