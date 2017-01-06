app.factory('playerService', ['$http', function ($http) {
  return {
    getPlayersList: function() {
      return $http.get('web-service/players-list.php');
    },
    getPlayer: function(id) {
      return $http.get('web-service/player.php?id='+id);
    },
    savePlayer: function(playerObj) {
       var responsePromise = $http.post("web-service/save-player.php", playerObj, {});
       return responsePromise;
    },
    deletePlayer: function(playerId) {
       var responsePromise = $http.post("web-service/delete-player.php", {'id':playerId}, {});
       return responsePromise;
    },
  };
}]);