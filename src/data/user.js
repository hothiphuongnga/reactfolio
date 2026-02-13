const INFO = {
	main: {
		title: "Phuong Nga | Software Engineer Portfolio",
		name: "Ho Thi Phuong Nga",
		email: "ngaho.dev@gmail.com", // đổi nếu cần
		logo: "../me.jpg",
	},

	socials: {
		twitter: "",
		github: "https://github.com/hothiphuongnga",
		linkedin: "https://www.linkedin.com/in/hothiphuongnga",
		facebook: "https://www.facebook.com/htpn.2602",
	},

	homepage: {
		title: ".NET Software Engineer • C# Instructor • LMS & CRM SaaS Builder",
		description:
			"I’m a Software Engineer specializing in .NET and C# Web API with React and Next.js. I build LMS and CRM SaaS platforms, training center management systems (enrollment, tuition, learning materials), and scalable backend architectures. I’m passionate about Clean Architecture, Domain-Driven Design, Microservices, and delivering real-world solutions for education and business.",
	},

	about: {
		title: "I’m Ho Thi Phuong Nga — Software Engineer & C# Programming Lecturer.",
		description:
			"I have hands-on experience building LMS systems for training centers, including student enrollment, tuition management, learning materials, and internal CRM platforms. I’ve also worked on CRM SaaS products, server deployment, and CI/CD pipelines. My technical focus includes .NET, C#, React, Next.js, Clean Architecture, DDD, Microservices, Redis, Kafka, and CQRS. I enjoy sharing knowledge, mentoring students, and continuously improving system design and software quality.",
	},

	articles: {
		title: "Sharing practical engineering experience and modern backend architecture.",
		description:
			"A chronological collection of my thoughts on .NET development, system design, LMS/CRM SaaS, Clean Architecture, CQRS, Redis, Kafka, and lessons learned from real-world projects.",
	},

	education: [
		{
			school: "CyberSoft Academy",
			degree: "Full Stack Development",
			field: ".NET & ReactJS",
			description: "Specialized training in .NET development, C# Web API, ReactJS, and modern web technologies.",
			startYear: 2020,
			endYear: 2022,
		},
		{
			school: "University of Technology",
			degree: "Bachelor's Degree",
			field: "Computer Science",
			description: "Fundamental computer science principles and software engineering practices.",
			startYear: 2016,
			endYear: 2020,
		},
	],

	projects: [
		{
			title: "Bizzego - CRM SaaS Platform",
			description:
				"CRM SaaS platform for managing customers, sales pipelines, and team workflows in a centralized system, built with a scalable architecture to support growing businesses.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://bizzego.com",
			languages: ["C#", ".NET", "Next.js", "TypeScript", "SQL Server", "Redis"],
			position: "Backend Lead & Full Stack Developer",
		},
		{
			title: "CyberSoft - Education Management Platform (LMS + CRM)",
			description:
				"Comprehensive LMS and CRM platform built for training centers, covering enrollment, payments, sales operations, learning content, assessments, attendance, certification, and lecturer management. Designed to streamline the entire journey from lead acquisition to learning delivery.",
			logo: "./logoCybersoft.png",
			linkText: "View Project",
			link: "https://login.cybersoft.edu.vn",
			languages: ["C#", ".NET", "ReactJS", "TypeScript", "SQL Server", "Redis"],
			position: "Full Stack Developer & System Architect",
		},
		{
			title: "Eduzy – AI Microlearning Platform",
			description:
				"AI-powered microlearning platform delivering personalized study paths, integrated payments, coding labs, video lessons, quizzes, live code execution, and mock interviews — built to support modern online education through bite-sized, adaptive learning experiences.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://eduzy.io",
			languages: ["C#", ".NET", "Next.js", "TypeScript", "SQL Server", "AI Integration"],
			position: "Full Stack Developer & AI Integration Engineer",
		}
	],
};

export default INFO;
