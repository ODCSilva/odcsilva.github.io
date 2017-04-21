app.controller("ExperienceController", function ($scope, $mdMedia) {
	$scope.$mdMedia = $mdMedia;
	$scope.jobs = [
		{
			title: "Programmer",
			company: "Almighty Software Company",
			dates: "March 2016 - Present",
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
		},{
			title: "Laptop Tech Support",
			company: "Convergys Corp.",
			dates: "March 2009 – September 2010",
			location: "Dartmouth, Nova Scotia",
			duties: [
				{text: "Provided Tier 3 to customer of AT&T Laptop Connect service"},
				{text: "Assisted customers with their mobile service issues and coordinated with other departments"
				+"to resolve customer issues when first-call resolution was not possible"}
			]
		},{
			title: "ADSL Support Technician (Tier 3)",
			company: "Coqui.net Corporation",
			dates: "March 2002 – July 2005",
			location: "Guaynabo, Puerto Rico, Unites States",
			duties: [
				{text: "Answered incoming calls from ADSL clients and assisted them during the troubleshooting process"},
				{text: "Interacted and coordinated with relevant departments to resolve customer issues"},
				{text: "Created and updated trouble tickets in order to track of problem status"}
			]
		}//,{
		// 	title: "Sales Floor Associate",
		// 	company: "Walmart Corp",
		// 	dates: "April 1999 - Janurary 2002",
		// 	location: "Bayamon, Puerto Rico, Unites States",
		// 	duties: [
		// 		{ text:" Greeted customers and determined their needs and wants"},
		// 		{ text:" Discussed type, quality and number of merchandise required for purchase"},
		// 		{ text:" Recommended merchandise based on individual requirements"},
		// 		{ text:" Advised customers on utilization and care of merchandise"},
		// 		{ text:" Provided advice to clients regarding particular products or services"},
		// 		{ text:" Explained the use and advantage of merchandise to customers"},
		// 		{ text:" Answered customers’ queries and concerns"},
		// 		{ text:" Showed the live working of merchandise"},
		// 		{ text:" Assisted in display of merchandise"}
		// 	]
		// }
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
		},
		{
			program: "Adult Learning Program",
			dates: "February 2014 - May 2015",
			institution: "Nova Scotia Community College",
			location: "Akerley Campus, Halifax, NS",
			achievments: [
				{ text: "Graduated with Honours with an average of 98%"},
				{ text: "Received Academic Achievement and Commitment to Learning awards"}
			]
		},
		{
			program: "High School",
			dates: "A long time ago...",
			institution: "Luis Pales Matos High School",
			location: "Bayamón, Puerto Rico, United States",
		}
	];
});
