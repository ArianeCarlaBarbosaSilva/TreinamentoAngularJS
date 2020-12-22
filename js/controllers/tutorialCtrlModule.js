angular.module('tutorialCtrlModule', [])

.controller('TutorialController', ["$scope", "Calculations", function($scope, Calculations){
    $scope.nome;
    $scope.sobrenome;
    $scope.tutorialObject = {};
    $scope.tutorialObject.bindOutput = 10;
    $scope.times2 = function(){
        $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
    }
}])

.factory("Calculations", function() {
    var calculations = {};

    calculations.timesTwo = function(number){
        return number*2;
    }
    return calculations;
})

.controller("TutorialController2", ["$scope", function($scope){
    $scope.secondTutorial = "Este é o segundo tutorial";
}]);

