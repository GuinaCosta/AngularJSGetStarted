(function(angular) {
    
    'use strict';
    var module = angular.module("myApp", []);
    
    module.controller("MainController", ['$scope', function($scope){
        
        var person = {
        nome: "Guina",
        sobrenome: "Costa",
        idade: 24,
        foto: "https://nerdsondotcom.files.wordpress.com/2013/03/yeoman-logo.png"
        };
        
        $scope.message = "Hello Guina";
        $scope.person = person;
    }]);
    
}(window.angular));