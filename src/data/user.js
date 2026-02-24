const INFO = {
	main: {
		title: "Phuong Nga | Software Engineer Portfolio",
		name: "Ho Thi Phuong Nga",
		email: "pnga62782@gmail.com", // đổi nếu cần
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
	skills: {
		technical: [
			{
				name: "HTML5",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			},
			{
				name: "CSS3",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			},
			{
				name: "JavaScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			},
			{
				name: "TypeScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			},
			{
				name: "C#",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
			},
			{
				name: ".NET",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
			},
			{
				name: "React",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			},
			{
				name: "Next.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			},
			{
				name: "Docker",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			},
			{
				name: "Git",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			},
			{
				name: "SQL Server",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
			},
			{
				name: "Redis",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
			},
			{
				name: "Blazor",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg",
			},
		],
		practices: [
			{
				name: "Clean Architecture",
				icon: "https://img.icons8.com/fluency/96/module.png",
			},
			{
				name: "Clean Code",
				icon: "https://img.icons8.com/fluency/96/code.png",
			},
			{
				name: "SOLID Principles",
				icon: "https://img.icons8.com/fluency/96/layers.png",
			},
			{
				name: "DDD",
				icon: "https://img.icons8.com/fluency/96/domain.png",
			},
			{
				name: "Microservices",
				icon: "https://img.icons8.com/fluency/96/api-settings.png",
			},
			{
				name: "CQRS",
				icon: "../cqrs.jpeg"
			},
			{
				name: "Dependency Injection",
				icon: "https://img.icons8.com/fluency/96/link.png",
			},
			{
				name: "Design Patterns",
				icon: "https://img.icons8.com/fluency/96/puzzle.png",
			},
			{
				name: "RESTful API",
				icon: "https://img.icons8.com/fluency/96/api.png",
			},
			{
				name: "Unit Testing",
				icon: "https://img.icons8.com/fluency/96/test-tube.png",
			},
			{
				name: "CI/CD",
				icon: "../cicd.jpg",
			},
			{
				name: "Event Driven",
				icon: "https://img.icons8.com/fluency/96/cloud-sync.png",
			},
		],
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
