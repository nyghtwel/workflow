// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.editable = [false, false];
  $scope.priorities = ["Now", "Tomorrow", "Someday"];
  $scope.todos = [
    {"text":"Learn Angular", "prio":"Now"},
    {"text":"Learn node", "prio": "Someday"}
  ];
  $scope.newItem = {};
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem.text){
      $scope.todos.push($scope.newItem);
      $scope.editable.push(false);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.saveItem = function(item){
    if($scope.todos[item] !== "")
      $scope.editable[item] = false;
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