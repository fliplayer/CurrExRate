angular.module('CurrExRate', [])
.controller('ExRateCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.rates= {};
	$http.get('http://api.fixer.io/latest').then(function(res){
		$scope.rates = res.data.rates;
		$scope.toType;
		$scope.fromType = $scope.rates.USD;
		$scope.fromValue = 1;
		$scope.forExConvert();
	});
	$scope.forExConvert = function(){
		$scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
		$scope.toValue = $scope.toValue;
	};
}]);