(function() {
  var app = angular.module('myApp', ['LocalStorageModule'])
  .controller('MyController', function($scope, localStorageService){
	  $scope.data = {};
	  
	  
	  // Add more tabs in here, and they'll show up on the page
	  $scope.tabs = [{
		  id: 0,
		  courseName: 'MAD9034',
		  courseDesc: 'UX Design',
		  tasks: [
		  'Midterm',
		  'Big Test',
		  'Final Project'
		  ]
		  },
		  {
			  id: 1,
		  courseName: 'MAD9132',
		  courseDesc: 'Android Application Development',
		  tasks: [
		  'Midterm',
		  'Big Test',
		  'Final Project'
		  ]
	},
	{
		id: 2,
		courseName:'MAD9133',
		courseDesc: 'Windows Phone Development',
		tasks: [
		  'Midterm',
		  'Big Test',
		  'Final Project'
		  ]
	}, 
	{
		id: 3,
		courseName:'MAD9135',
		courseDesc: 'Developing HTML5 Mobile Applications',
		tasks: [
		  'Midterm',
		  'Big Test',
		  'Final Project'
		  ]
	}];
	
	  $scope.tasks = [ 'Assignment 1', 'Assignment 2', 'Assignment 3'];
	  
	$scope.addTask = function(course) {
		$scope.tabs[course].tasks.push($scope.data.task);
		
		
		// set the local storage here
		if (localStorageService.isSupported){
			localStorageService.set(course, $scope.data.task); 
		}
			
		$scope.data.task = "Enter something here";
		
	};
	$scope.removeTask = function(courseId, selectedTask, howMany) {
		$scope.tabs[courseId].tasks.splice(selectedTask, howMany);
		
		// remove from local storage here
		//localStorageService.set(course, $scope.data.task); 
	};
	$scope.clearAllTasks = function() {
		$scope.tasks = [];
	}; 

  });
  
  
  // Display content for the clicked course
  app.controller('courseController', function(){
    this.course = 3; // DEFAULT COURSE

// Used in the href click 
    this.setCourse = function(newValue){
      this.course = newValue;
    };

// Display content based on the click (see above) 
    this.showTask = function(courseValue){
      return this.course === courseValue;
    };
	
	this.addToStorage = function(){
		//localStorage.setItem("local", JSON.stringify(elem.persons));
	};
	
	this.deleteFromStorage = function(){
	
	};
	
	
  });
})();


/*
app.controller('MainCtrl', function($scope, $route, $routeParams, $location) {
   });

   
 app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html'
  })
  .when('/mad9034', {
   templateUrl: 'view/mad9034.html',
   controller : 'mad9034'
  }).when('/mad9035', {
	templateUrl: 'view/mad9035.html',
   controller : 'mad9035'
   }).when('/mad9036', {
	templateUrl: 'view/mad9036.html',
   controller : 'mad9036'
  });

  $routeProvider.otherwise({
        redirectTo: '/'
      });
});
*/