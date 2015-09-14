// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.priorities = ["Now", "Tomorrow", "Someday"]
  $scope.todos = [
    {"text":"Learn Angular", "prio":"Now", "done":true},
    {"text":"Learn node", "prio": "Someday", "done":false}
  ];
  $scope.newItem = {};
  $scope.editable = [false, false]
  $scope.totalItems = 2;

  $scope.pressEnter = function(keyEvent) {
    if (keyEvent.which === 13) {
      $scope.addItem();
    }
  }

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem.text){
      $scope.todos.push($scope.newItem);
      $scope.editable.push(false);
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

  $scope.saveItem = function(item){
    if($scope.todos[item].text !== "")
      $scope.editable[item] = false;
  }

  $scope.clear = function(){
    console.log("in clear");
    var temp = [];

    for(var i in $scope.todos){
      if($scope.todos[i].done != true) temp.push($scope.todos[i]);
    }
    $scope.totalItems = temp.length;
    $scope.todos = temp;

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
