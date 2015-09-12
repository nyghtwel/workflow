// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.priorities = ["Now", "Tomorrow", "Someday"]
  $scope.todos = [
    {"text":"Learn Angular", "prio":"Now"},
    {"text":"Learn node", "prio": "Someday"}
  ];
  $scope.newItem = {};
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  $scope.totalItems = 2;
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem.text){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.totalItems += 1;
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.totalItems -= 1;
  }
    
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/