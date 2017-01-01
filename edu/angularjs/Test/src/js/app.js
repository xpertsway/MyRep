/**
 * Created by nagaraju on 1/1/2017.
 */
var myApp = angular.module("myApp",[]);
myApp.controller('MainController',['$scope',function ($scope) {
    console.log('>>>  MainController');
    $scope.greetings = "Hi, How are you ";

    $scope.sayHello = function(name){

        return $scope.greetings + ' ' + name;
    }


}]);