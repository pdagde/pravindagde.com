angular.module('ProfileCtrl', ['ngSanitize']).controller('ProfileController', function($scope,$rootScope) {

	$rootScope.showContact=true;
	$scope.name = 'Pravin Laxman Dagde';
	$scope.title = 'SOFTWARE DEVELOPER,BANGALORE';
	$scope.dob = '13-03-1990';
	$scope.phone = '+91 9689055690';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KARNATAKA, India.'};
	$scope.mail = 'pravin.dagde@gmail.com';
	$scope.blog = {url: '', title: 'Blogs [Coming soon]'};
	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/pravin-dagde-ab1a34107?trk=nav_responsive_tab_profile',
		twitter: 'https://twitter.com/pravindagde',
		skype: 'https://web.skype.com/en/?intsrc=client-_-webapp-_-production-_-go-signin',
		github: 'https://github.com/pdagde',
		insta:'https://www.instagram.com/pravindagde/'
	};

	$scope.aboutus = '<p>I am an software engineer.' +
		' I like to learn new technologies and play around. Currently working in Medibox,' +
		' Bangalore as Software Engineer,' +
		' I am involved with designing and developing scalable applications,</p>' +
		'<br>' +
		'<p>I\'ve been associated and involved with computers through out my life.' +
		' Among other stuff, I like to play sports,' +
		' surf blogs and articles. And of course '+
		'<a href="https://www.instagram.com/pravindagde/?hl=en"><i >#Instagram</i></a> </p>';
	$scope.awards = [
		'Top 10 in Robotics Champian , Pune, 2009',

	];


	$scope.workInfo = [{
		year: '1 June 2015 - 21 December 2015 ',
		company: ' SAP LAB INDIA PVT.LTD, PUNE',
		role: ' Software Developer',
		description: '<p>Designed & Developed scalable App application to build digital platform ' +
		'for healthcare industry.' +
		' Designed, Developed And Test Android App for Pharmacies to Order Medicine from Suppliers.,' +
		' to facilitate Demilitarized zone, and proactively enforce security measures.</p>' +
		'<p>Technologies used: Android, Ionic Framework, Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
	},{
		year: 'July 2016 - Present ',
		company: ' Medibox Technologies LLP, Bangalore',
		role: ' Software Developer',
		description: '<p>Designed & Developed scalable App application to build digital platform ' +
		'for healthcare industry.' +
		' Designed, Developed And Test Android App for Pharmacies to Order Medicine from Suppliers.,' +
		' to facilitate Demilitarized zone, and proactively enforce security measures.</p>' +
		'<p>Technologies used: Android, Ionic Framework, Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
	}];

	$scope.education = [ {
		title: 'MCA(Computer Science), 2016',
		univ: '  Pune University Computer Science Department, Pune ',
		description: '<p>Completed the Degree, Master of Computer Science: Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Information systems, Network & system security, Distributed systems</p><p> Project on Evaluation of Operating System Module</p>'
	}, {
		title: 'B.C.S, 2012',
		univ: ' T.C.College, Baramati, Pune ',
		description: '<p>Completed the Degree, Bachelor of Computer Science</p>'
	}, {
		title: 'H.S.C, 2009',
		univ: ' M S Junior College of Science , Shrigonda, Ahmednagar ',
		description: '<p>Completed the 12th STD</p>'
	}, {
		title: 'S.S.C, 2007',
		univ: ' Ashram School Dhawalpuri, Parner,  Ahmednagar',
		description: '<p>Completed the 10th STD</p>'
	}];

	$scope.skills = [{
		title: 'Languanges - C',
		value: '80%'
	},
		{
			title: 'Algorithms & Data structures',
			value: '85%'
		},

		{
			title: 'Languanges - C++/Java',
			value: '60%'
		},

		{
			title: 'Languanges - Assembaly/Haskell',
			value: '75%'
		},

		{
		title: 'Android App Development ',
		value: '82%'
	}, {
		title: 'Scripting - Node.JS/AngularJS/Ionic/JavaScript/Shell',
		value: '78%'
	}, {
		title: 'HTML/CSS',
		value: '70%'
	}, {
		title: 'NoSQL - Mongo DB ',
		value: '65%'
	},  {
		title: 'Web App development ',
		value: '70%'
	}, {
		title: 'DB SQl - MySQL',
		value: '75%'
	}];
});
