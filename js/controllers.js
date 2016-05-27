// USING ANGULAR
angular.module('starWarsApp').controller('PeopleController', peopleController);
  
  peopleController.$inject = ['$http', '$scope'];
  
  function peopleController($http, $scope){
    $scope.getRandomPerson = function(){
      $http.get('http://www.swapi.co/api/people/').then(function(res){
        // console.log(res);
        let count = res.data.count;
        let randomId = Math.ceil(Math.random() * count);
        return $http.get(`http://www.swapi.co/api/people/${randomId}`);
      }).then(function(res){
        $scope.data = res.data;
      });
    };
  }

// USING JQUERY
angular.module('starWarsApp').controller('PlanetsController', planetsController);
  
  planetsController.$inject = ['$scope'];
  
  function planetsController($scope){
    $scope.getRandomPlanet = function(){
      $.get('http://www.swapi.co/api/planets/').then(function(res){
        console.log(res);
        let count = res.count;
        let randomId = Math.ceil(Math.random() * count);
        return $.get(`http://www.swapi.co/api/planets/${randomId}`);
      }).then(function(res){
        console.log(res);
        $scope.data = res;
        $scope.$apply();
      });
    };
  }

// SELF ATTEMPT
angular.module('starWarsApp').controller('VehiclesController', vehiclesController);

  vehiclesController.$inject = ['$http', '$scope'];

  function vehiclesController($http, $scope){
    $scope.getRandomVehicle = function(){
      $http.get('http://www.swapi.co/api/vehicles/').then(function(res){
        console.log(res);
        let count = res.data.count;
        let randomId = Math.ceil(Math.random() * count);
        console.log(count, randomId);
        return $http.get(`http://www.swapi.co/api/vehicles/${randomId}`);
      }).then(function(res){
        console.log(res);
        $scope.data = res.data;
      });
    }
  }