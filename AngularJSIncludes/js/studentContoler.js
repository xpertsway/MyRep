      myApp.controller("StudentController",function($scope){
	     $scope.student = {
		 firstname : 'Nagaraju',
		 lastname : 'Ravuri',
		 fee:500,
		 subjects:[
		   {srno:1,name:'Telugu',marks:60},
		   {srno:2,name:'English',marks:80},
		   {srno:3,name:'Hindhi',marks:90},
		   {srno:4,name:'Matchs',marks:100},
		   {srno:5,name:'Science',marks:100},
		   {srno:6,name:'Sosial',marks:60},
		   {srno:7,name:'Total',marks:450}
		 ],
		 fulname:function(){
		   var studentObject = $scope.student;
		   return 'Hellow, ' + studentObject.firstname +' '+ studentObject.lastname;
		 }
		 };
	  });
	  
	  
	  

	  myApp.controller("dataController",function($scope,$http){
	  
	  
	   $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo').
           then(function(response) {
            $scope.greeting = response.data;
         });

		 
	  });
	  
	  
	   
