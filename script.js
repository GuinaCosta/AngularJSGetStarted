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
    
    module.controller("HttpController", ['$scope', '$http', function($scope, $http){
        var authCode = '?client_id=guinacosta&client_secret=coxas123ha';
        
        var onUserComplete = function (response) {
            $scope.user = response.data;
                    
            $http.get($scope.user.repos_url + authCode)
                .then(onRepos, onError);

        }
        
        var onError = function (reason) {
            $scope.errorMessage = "Deu ruim pra buscar os dados... :(";
        }
        
        var onRepos = function(response){
            $scope.respositorios = response.data;
        }
        
        $scope.buscar = function(username) {
            $http.get("https://api.github.com/users/" + username + authCode)
                .then(onUserComplete, onError);    
        }
        
        $scope.repoSortOrder = "+language";
    }]);
    
}(window.angular));