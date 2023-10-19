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
			]
		}
	];
});
