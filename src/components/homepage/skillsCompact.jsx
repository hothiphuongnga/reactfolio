import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/skillsCompact.css";

const SkillsCompact = ({ skills }) => {
	const { t } = useTranslation();

	return (
		<div className="skills-compact-wrapper">
			<div className="skills-compact-section">
				<div className="skills-compact-header">
					<div className="skills-compact-title">{t('skills.technicalTitle')}</div>
				</div>
				<div className="skills-compact-grid">
					{skills.technical.map((skill, index) => (
						<div key={index} className="skill-compact-item" title={skill.name}>
							<img src={skill.icon} alt={skill.name} />
						</div>
					))}
				</div>
			</div>

			<div className="skills-compact-section">
				<div className="skills-compact-header">
					<div className="skills-compact-title">{t('skills.practicesTitle')}</div>
				</div>
				<div className="skills-compact-grid">
					{skills.practices.map((skill, index) => (
						<div key={index} className="skill-compact-item practice-compact" title={skill.name}>
							<img src={skill.icon} alt={skill.name} />
							<span className="skill-compact-name">{skill.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsCompact;
