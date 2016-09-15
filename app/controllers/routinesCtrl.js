"use strict";

app.controller("routinesCtrl", function ($scope, $window, authFactory, routineFactory) {

  //get all routines from firebase*
  //only use routines allocated to the currently logged in user
  //assign the user's routines to the $scope.routines array
  //these are then displayed on the DOM via the ng-repeat directive in routinesView.html
  routineFactory.getRoutines().then( function (routinesArray) {
    $scope.routines = routinesArray;
  });


  $scope.editRoutine = function (routineid) {

  }

  $scope.deleteRoutine = function (routineid) {
    routineFactory.deleteRoutine(routineid).then ( function () {
      routineFactory.getRoutines().then( function (routinesArray) {
        $scope.routines = routinesArray;
      });
    });
  }

  //navigate to
  $scope.createNewRoutine = function () {
    $window.location.href = "#/routines/create";
  };

  //navigate to
  $scope.viewCompletedRoutines = function () {
    console.log("view completed");
  };

});