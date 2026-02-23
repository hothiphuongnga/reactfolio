import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/skills.css";

const Skills = ({ skills }) => {
	const { t } = useTranslation();

	return (
		<div className="skills-wrapper">
			<div className="skills-container">
				<div className="skills-title">{t('skills.technicalTitle')}</div>
				<div className="skills-grid">
					{skills.technical.map((skill, index) => (
						<div key={index} className="skill-item">
							<div className="skill-icon">
								<img src={skill.icon} alt={skill.name} />
							</div>
							<div className="skill-name">{skill.name}</div>
						</div>
					))}
				</div>
			</div>

			<div className="skills-container">
				<div className="skills-title">{t('skills.practicesTitle')}</div>
				<div className="skills-grid practices-grid">
					{skills.practices.map((skill, index) => (
						<div key={index} className="skill-item practice-item">
							<div className="skill-icon">
								<img src={skill.icon} alt={skill.name} />
							</div>
							<div className="skill-name">{skill.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
