app.controller('indexController', function($scope,playerService) {
	var promise = playerService.getPlayersList();
	promise.then(function(response) {
	  $scope.playerList = response.data;
	});

	$scope.resetSearch = function(){
		$scope.player = {};	
	}

	$scope.sortBy = 'name';
	$scope.sortReverse = false;


	$scope.deletePlayer = function(id){
		console.log(id);
		var sure = confirm("Are you sure you want to delete the player?");
		if(sure){
			var promiseD = playerService.deletePlayer(id);
			promise.success(function(dataFromServer, status, headers, config) {
			  if(dataFromServer == 'success'){
				alert("Player record successfully deleted");
	       	  } else {
				alert("Error while deleting the player record");
	       	  }
			});
		}
		window.location.href = '/angular-sportstars';
	}
});

app.controller('playerController', function($scope, playerService, $routeParams) {
	var promise = playerService.getPlayer($routeParams.id);
	promise.then(function(response) {
	  $scope.player = response.data;
	});
});

app.controller('formController', function($scope, $rootScope, playerService, $routeParams, $location) {

	$scope.player = {
	    "name" : "",
	    "age" : "",
	    "gender" : "",
	    "country" : "",
	    "sports" : "",
	    "trophies" : ""
	};
	$scope.title="Add Player";
	if( $routeParams.id !== undefined && $routeParams.id !== null){
		var promise = playerService.getPlayer($routeParams.id);
		promise.then(function(response) {
		  $scope.player = response.data;
		  $scope.title="Edit Player : "+$scope.player.name;
		});

	}

	$scope.submitPlayer = function(){
		var responsePromise  = playerService.savePlayer($scope.player);
		responsePromise.success(function(dataFromServer, status, headers, config) {
       	  if(dataFromServer == 'success'){
			alert("Player record successfully saved");
       	  } else {
			alert("Error while saving the player");
       	  }
        });
		window.location.href = '/angular-sportstars';
	}
});