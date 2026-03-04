import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/skillsCompact.css";

const SkillsCompact = ({ skills }) => {
	const { t } = useTranslation();

	return (
		<div className="skills-compact-wrapper">
			{skills.map((category, catIndex) => (
				<div key={catIndex} className="skills-compact-section">
					<div className="skills-compact-header">
						<div className="skills-compact-title">
							{t(`skills.${category.key}Title`)}
						</div>
					</div>
					<div className="skills-compact-grid">
						{category.items.map((skill, index) => (
							<div key={index} className="skill-compact-item" title={skill.name}>
								<img src={skill.icon} alt={skill.name} />
								<span className="skill-compact-name">{skill.name}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SkillsCompact;
