var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl:'home.html'
    })
    .when('/users',{
        template:'<profile-list></profile-list>'
    })
    .otherwise('/')
})

app.controller("mainCtrl", function($scope, mainSvc){
    $scope.firstName = "John";
    $scope.lastName = "smith";
    $scope.username = 'Nick';
    $scope.phoneNo = '8367751715';
    $scope.state = 'AP' 

    $scope.alertButton = function(){
        alert("its a alert");
    };
    

    // $ctrl.addName = function(name2){
    //     console.log("name2 in addNmar",name2);
    //     $ctrl.userName=name2
    // }

});

app.directive('myDirective', function() {
    return {
        restrict : "A",
        template : "<h4 id='directive'>Made by a directive!</h4>"
    };
})

app.service('mainSvc', function($http){
    this.getProfiles = function(){
        return $http.get('https://dummyapi.online/api/social-profiles');
    }
});

app.component('detailsComp',{
    bindings:{
        phoneNo :'=',
        state :'<',
        username : '<'
    },

    template:` {{$ctrl.initData}}<br/>
    username with pincode {{$ctrl.username}} <br/>
    <span>
    </span>
    <br/> <br/>
    `,
    controller:function(){
        var $ctrl=this;

        $ctrl.$onInit=function(){
            $ctrl.initData='Initialisation of details component';
            $ctrl.state = 'MP'; 
            $ctrl.phoneNo = '9876543218';
         } 


        this.$onChanges= function(changesObj){
            if(changesObj.username){
                var pincode;
                (changesObj.username.cuurentValue==='TamilNadu') ? pincode="-11111" : pincode="-222222"
                this.username= this.username+pincode;
            }           
        }

        // $ctrl.addAName = function(){
        //     $ctrl.addName({name1:$ctrl.newname});
        //     $ctrl.newname = '';
        // }
    } 
})
