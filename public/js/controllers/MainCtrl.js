angular.module('MainCtrl', []).controller('MainController', function($scope,$mdDialog,$rootScope) {


	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/pravin-dagde-ab1a34107?trk=nav_responsive_tab_profile',
		twitter: 'https://twitter.com/pravindagde',
		skype: 'https://web.skype.com/en/?intsrc=client-_-webapp-_-production-_-go-signin',
		github: 'https://github.com/pdagde'
	};
	$scope.phone = '+91 9689055690';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KA, India.'};
	$scope.mail = 'pravin.dagde@gmail.com';
    $rootScope.showContact=true;
	$scope.ComingSoon = function(ev) {


		console.log($scope.myname);
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title('Under Construction')
				.textContent('Its lot of work..!stay tune..!')
				.ariaLabel('Site is under construction')
				.ok('ookchaa.!!')
				.targetEvent(ev)
		);
	};
});

