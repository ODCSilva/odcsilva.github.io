app.controller("ExperienceController", function ($scope, $mdMedia) {
	$scope.$mdMedia = $mdMedia;
	$scope.jobs = [
		{
			title: "Mobile Android Developer",
			company: "REDspace Inc.",
			dates: "May 2017 - July 2023 (6 years)",
			location: "Bedford, Nova Scotia",
			duties: [
				{text: "Responsible for working"},
				{text: "Worked with clients to implement new features"}
			]
		},
		{
			title: "Programmer",
			company: "Almighty Software Company",
			dates: "March 2016 - April 2017 (1 year)",
			location: "Halifax, Nova Scotia",
			duties: [
				{text: "Oversaw development of Android based project"},
				{text: "Contributed to both source code and user interface design"},
				{text: "Managed, coordinated, and communicated with the rest of the team to ensure project objectives were being met"},
				{text: "Participated in daily SCRUM meetings to assess progress and keep project in focus"},
				{text: "Participated in the development of technical specification for Android app"},
				{text: "Designed data models for Android app backend"},
				{text: "Adhered to high software quality standard"}
			]
		}
	];

	$scope.education = [
		{
			program: "Diploma in Information Technology, Programming Concentration",
			dates: "September 2015 - May 2017",
			institution: "Nova Scotia Community College",
			location: "Institute of Technology, Halifax, NS",
			achievments: [
				{ text: "Graduated summer 2017"},
				{ text: "Maintained high academic standards throughout the entirety of the program"}
			],
			courses: [
				{ name: "Intro Windows Administration", code: "OSYS 1200" },
				{ name: "Technical Communications", code: "COMM 1100" },
				{ name: "Introduction to Networking", code: "NETW 1100" },
				{ name: "Intro to Programming - Python", code: "PROG 1102" },
				{ name: "Website Development", code: "WEBD 1000" },
				{ name: "Introduction to Databases", code: "DBAS 1001" },
				{ name: "Human Relations", code: "INFT 1300" },
				{ name: "Operating Systems - Unix", code: "OSYS 1000" },
				{ name: "User Interface Design & Dev", code: "APPD 1001" },
				{ name: "Database Development I", code: "DBAS 1100" },
				{ name: "Intro Obj Oriented Programming", code: "PROG 1400" },
				{ name: "Hardware", code: "HDWR 1100" },
				{ name: "Project Management", code: "INFT 2100" },
				{ name: "Web Application Development 1", code: "INET 2005" },
				{ name: "Programming C++", code: "PROG 2100" },
				{ name: "J2EE Development", code: "WEBD 3102" },
				{ name: "Professional Development", code: "INFT 2000" },
				{ name: "Mobile Application Development", code: "APPD 2000" },
				{ name: "Data Structures", code: "PROG 2400"},
				{ name: "Advanced OOP", code: "PROG 2200"},
				{ name: "Rich Internet Applications", code: "WEBD 2000"},
				{ name: "Windows Programming - C#", code: "PROG 2500"},
				{ name: "Development Process Controls", code: "INFT 4001"},
				{ name: "Programming Capstone", code: "INFT 3000"}
			]
		}
	];
});
