import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/skills.css";

const Skills = ({ skills }) => {
	const { t } = useTranslation();

	return (
		<div className="skills-wrapper">
			{skills.map((category, catIndex) => (
				<div key={catIndex} className="skills-container">
					<div className="skills-title">
						{t(`skills.${category.key}Title`)}
					</div>
					<div className="skills-grid">
						{category.items.map((skill, index) => (
							<div key={index} className="skill-item">
								<div className="skill-icon">
									<img src={skill.icon} alt={skill.name} />
								</div>
								<div className="skill-name">{skill.name}</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
