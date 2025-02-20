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
				{text: "Spearheaded development of a health/fitness app, mastering Java and new tools from scratch in under a year."},
				{text: "Crafted intuitive UI/UX designs, integrating APIs to deliver a responsive, user-centric experience."},
				{text: "Partnered with stakeholders to refine features based on direct user feedback, driving iterative enhancements."},
				{text: "Adopted testing, version control (Git), and data management practices to ensure product stability. "},
				{text: "Presented app at tech events, gaining insights into user expectations and interactive design."}
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
