function profileListController(mainSvc,$scope){

    mainSvc.getProfiles().then((res) =>{
        console.log(res.data);
        $scope.profiles = res.data;
    });
}

app.component('profileList',{
    templateUrl:'./components/profile/profile-list.html',
    controller: profileListController
})