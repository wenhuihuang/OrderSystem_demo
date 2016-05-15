var ctrl = angular.module('orderSystem.controllers', []);

ctrl.controller('HomeCtrl', function($scope, $ionicModal,$http,$location) {

  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.login = function() {
    if($scope.loginData.username != null){
      $location.path('/app/home')
    }else{
      $scope.modal.show();
    // $location.path('test')
    }
  };

  $scope.doLogin = function() {
		alert("0")
  };
});
