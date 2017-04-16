myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', function ($scope) {
	// $scope.months = ['january', 'febuary','march', 'april', 'may'];

	$scope.imagelist = [
		{
			url: 'img/rishu1.jpg',
			name: 'rishu1',
			month: 'January'
		},
		{
			url: 'img/rishu2.jpg',
			name: 'rishu2',
			month: 'Febuary'
		},
		{
			url: 'img/rishu3.jpg',
			name: 'rishu3',
			month: 'March'
		},
		{
			url: 'img/rishu4.jpg',
			name: 'rishu4',
			month: 'April'
		}	
	];

	$scope.imagebymth = function(imageurl){

		if ($scope.imagelist[0].url==imageurl){
			$scope.detailedimages=[
				{
					url: '/img/jan/rishu1det.jpg',
					name: 'rishu1det'
				},
				{
					url: '/img/jan/rishu1det1.jpg',
					name: 'rishu1det1'
				},		
				{
					url: '/img/jan/rishu1det2.jpg',
					name: 'rishu1det2'
				},		

			];




		}
			else if ($scope.imagelist[1].url==imageurl) {
			$scope.detailedimages=[
				{
					url: '/img/jan/rishu2det.jpg',
					name: 'rishu2det'
				},
				{
					url: '/img/jan/rishu2det1.jpg',
					name: 'rishu2det'
				},
				{
					url: '/img/jan/rishu2det2.jpg',
					name: 'rishu2det'
				}
			];		
		}
			else if ($scope.imagelist[2].url==imageurl) {
			$scope.detailedimages=[
				{
					url: '/img/jan/rishu3det.jpg',
					name: 'rishu3det'
				},
				{
					url: '/img/jan/rishu3det1.jpg',
					name: 'rishu2det'
				},
				{
					url: '/img/jan/rishu3det2.jpg',
					name: 'rishu2det'
				}
			];		
		}
			else if ($scope.imagelist[3].url==imageurl) {
			$scope.detailedimages=[
				{
					url: '/img/jan/rishu4det.jpg',
					name: 'rishu4det'
				},
				{
					url: '/img/jan/rishu4det1.jpg',
					name: 'rishu4det'
				},
				{
					url: '/img/jan/rishu4det2.jpg',
					name: 'rishu4det'
				}
			];		
		}


			$scope.currentIndex = 0;			

			$scope.setCurrentImage=function(index){
				$scope.currentIndex = index;
			};

			$scope.isCurrentImage = function(index){
				return $scope.currentIndex === index;
			};

			$scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.detailedimages.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.detailedimages.length - 1;
        };
	};

}]);
