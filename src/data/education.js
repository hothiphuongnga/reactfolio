import React from "react";

function education_1() {
	return {
		school: "CyberSoft Academy",
			degree: "Full Stack Development",
			field: ".NET & ReactJS",
			description: "Specialized training in .NET development, C# Web API, ReactJS, and modern web technologies.",
			startYear: 2020,
			endYear: 2022,
		style: `
				.education-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="education-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function education_2() {
	return {
		school: "University of Technology",
			degree: "Bachelor's Degree",
			field: "Computer Science",
			description: "Fundamental computer science principles and software engineering practices.",
			startYear: 2016,
			endYear: 2020,
		body: (
			<React.Fragment>
				<h1>Content of education 2</h1>
			</React.Fragment>
		),
	};
}

const myEducations = [education_1, education_2];

export default myEducations;
