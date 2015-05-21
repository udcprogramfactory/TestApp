application.config(['$routeProvider',
  function($routeProvider) {
	  
    $routeProvider.
      when('/', {		  
        templateUrl: 'app/views/dashboard/dashboardView.html',
        controller: 'DashboardController'
      }).
      when('/student', {
        templateUrl: 'app/views/validator/studentsView.html',
        controller: 'StudentsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
