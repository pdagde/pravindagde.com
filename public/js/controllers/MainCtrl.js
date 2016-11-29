angular.module('MainCtrl', ['ui.bootstrap']).controller('MainController', function($scope,$mdDialog,$rootScope,$http) {


	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/pravin-dagde-ab1a34107?trk=nav_responsive_tab_profile',
		twitter: 'https://twitter.com/pravindagde',
		skype: 'https://web.skype.com/en/?intsrc=client-_-webapp-_-production-_-go-signin',
		github: 'https://github.com/pdagde'
	};
	$scope.phone = '+91 9689055690';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'Karnataka, India.'};
	$scope.mail = 'pravin.dagde@gmail.com';
    $rootScope.showContact=true;

	$scope.ComingSoon = function(details) {

          $scope.details = {
			   name : details.name,
          	   email : details.email,
			   phone : details.phone,
			   message : details.message
		     }

			$http.post('/patient',$scope.details).success(function(result){

				refresh();
			})


		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title('Thanks'+ " " + details.name)
				.textContent('Giving your thought')
				.ariaLabel('Site is under construction')
				.ok('ok')
		);



		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog

	};
});

