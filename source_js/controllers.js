app.controller('listController', ['$scope', '$http', function($scope, $http) {

/*http://stackoverflow.com/questions/28917819/how-to-set-the-sorting-order-asc-desc-of-an-array-based-on-dynamically-selecte*/
    $scope.inputText = 'Enter a Movie Name';
    $scope.options = [{ name: 'Title', id: 'title' }, { name: 'Rank', id: 'rank' }];
    $scope.directions = [{ name: 'Ascending', id: true }, { name: 'Descending', id: false }];    
    $scope.selectedOption = $scope.options[0];
    $scope.selectedOrder = $scope.directions[0];


    $http.get('./data/imdb250.json').success(function(data){

        $scope.movies = data;

    }).error(function(err){
        console.log(err);
    })

}]);

app.controller('galleryController', ['$scope', '$http', function($scope, $http) {

    $scope.genres = [ 'Adventure', 'Sport', 'Animation', 'War', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 
                    'Mystery', 'Biography', 'Romance', 'Sci-Fi', 'Action', 'Thriller', 'Western' ];

    $scope.filters = { genre: '' };

    $http.get('./data/imdb250.json').success(function(data){

    	$scope.movies = data;
    	console.log(data);

    }).error(function(err){
    	console.log(err);
    })


}]);

/*http://stackoverflow.com/questions/29508857/angularjs-json-obtain-value-from-previous-next-object*/
/*http://stackoverflow.com/questions/34304502/how-to-add-previous-next-options-using-angularjs-or-javascript*/

app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $http.get('./data/imdb250.json').success(function(data){
        $scope.movie = data[$routeParams.rank - 1];
        prev = +$routeParams.rank-1;
        next = +$routeParams.rank+1;

        if(prev < 1)
            prev = 250;
        if(next > 250)
            next = 1;

        $scope.nextrank = next;
        $scope.prevrank = prev;
        
        console.log(data);
    }).error(function(err){
        console.log(err);
    })

}]);