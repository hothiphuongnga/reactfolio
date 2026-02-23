import React from "react";
import { useTranslation } from "react-i18next";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { t } = useTranslation();
	const projects = t('user.projects', { returnObjects: true });

	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={INFO.projects[index].logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={INFO.projects[index].link}
						languages={INFO.projects[index].languages}
						position={project.position}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
