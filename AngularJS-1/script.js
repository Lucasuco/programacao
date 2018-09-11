var main = angular.module('app',['ngRoute']);

main.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/cadastro',{
        templateUrl: 'cadastro.html',
        controller: 'cadastroCtrl'
    })
    .when('/visualizar',{
        templateUrl: 'visualizar.html',
        controller: 'cadastroCtrl'
    })
    .otherwise({
        redirectTo: '/cadastro'
    });

}]);

main.controller('cadastroCtrl',function($scope){
     
    alunos=[];

    $scope.alunos = alunos;

    $scope.adicionar = function(){
        alunos.push({nome: $scope.nome, sobrenome: $scope.sobrenome});
    };  

});
