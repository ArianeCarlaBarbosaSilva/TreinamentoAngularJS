var app = angular.module('loja',["ngRoute", "tutorialCtrlModule"]);

app.config(function($routeProvider){
    $routeProvider

        .when("/", { 
            templateUrl: "views/tutorial.html",
            controller: "TutorialController" 
        })
        .when("/tutorialSecond", { 
            templateUrl: "views/tutorialSecond.html",
            controller: "TutorialController2" 
        })
        .otherwise({
            redirectTo: "/"
        });
})