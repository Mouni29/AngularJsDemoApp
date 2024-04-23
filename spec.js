
// describe("true",function(){
//     it("should be true",function(){
//         expect(true).toBeTruthy();
//     })
// })

describe('SimpleCtrl', function () {
  var $controller, $scope;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function (_$controller_, $rootScope) {

    $scope = $rootScope.$new();

    $controller = _$controller_;

    $controller('SimpleCtrl', { $scope: $scope });
  }));

  it('should set message to "welcome to Angular JS"', function () {
    expect($scope.message).toEqual('welcome to Angular JS');
  });

  it('should add a destination to destinations array', function () {
    $scope.city = 'New York';
    $scope.country = 'USA';
    $scope.addDestination();
    expect($scope.destinations.length).toEqual(1);
    expect($scope.destinations[0]).toEqual({ city: 'New York', country: 'USA' });
  });

  it('should clear city and country after adding destination', function () {
    $scope.city = 'Paris';
    $scope.country = 'France';
    $scope.addDestination();
    expect($scope.city).toEqual('');
    expect($scope.country).toEqual('');
  });
});
