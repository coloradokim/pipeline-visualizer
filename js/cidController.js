app.controller('SearchController', ["$scope", "$location", 'DataFactory', 'SearchFactory', 'SearchTerm', 'CurrentCandidate',  function($scope, $location, DataFactory, SearchFactory, SearchTerm, CurrentCandidate) {
  $scope.addSearch = function(){
    var sTerm = $scope.search.searchTerm
    SearchTerm.current = sTerm
    DataFactory.getList(SearchTerm.current).then(function(response) {
      var parsedResponse = JSON.parse(response.body)
      var legislatorsArray = parsedResponse.response.legislator
      console.log(legislatorsArray);
      $scope.legislators = legislatorsArray
    })
  }
}]);
