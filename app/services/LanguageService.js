app.service('LanguageService', function() {
	return {
		cpp: {
			name: "C++",
			icon_name: "devicon-cplusplus-plain colored"
		},
		csharp: {
			name: "C#",
			icon_name: "devicon-csharp-plain colored"
		},
		css3: {
			name: "CSS3",
			icon_name: "devicon-css3-plain-wordmark colored"
		},
		html5: {
			name: "HTML5",
			icon_name: "devicon-html5-plain-wordmark colored"
		},
		java: {
			name: "Java",
			icon_name: "devicon-java-plain colored"
		},
		js: {
			name: "JavaScript",
			icon_name: "devicon-javascript-plain colored"
		},
		jquery: {
			name: "jQuery",
			icon_name: "devicon-jquery-plain colored"
		},
		php: {
			name: "PHP",
			icon_name: "devicon-php-plain colored"
		},
		python: {
			name: "Python",
			icon_name: "devicon-python-plain colored"
		},
		all: function() {
			return [
				this.cpp,
				this.csharp,
				this.css3,
				this.html5,
				this.js,
				this.java,
				this.jquery,
				this.php,
				this.python
			];
		}
	};
});
