


var demoApp = angular.module('sampleApp',[]);

demoApp.controller('SimpleCtrl',function($scope) {
        $scope.message = 'welcome to Angular JS';

        $scope.destinations = [];

        $scope.addDestination = ()=>{
            $scope.destinations.push({city:$scope.city,country:$scope.country})
            $scope.city='';
            $scope.country=''
        }

});



    // demoApp.factory('simpleService',function (){
    //     var service = {
    //         getData : function(){
    //             return [{id:1,name:'Naresh'},{id:2,name:'Id'}]
    //         }
    //     }

    //     return service;

    // });