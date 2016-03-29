app.controller('AppController',
    function ($scope, $rootScope, $location, notifyService, getMenuDataService ) {
        sessionStorage.clear();
	
        $rootScope.logo = "Demo Restaurant";
        $rootScope.obj = 'main';
        $rootScope.badgeCount = 0;
        $rootScope.total = 0;
        $rootScope.clars = [];
        $rootScope.info = '';

        $scope.items = {};

        getMenuDataService.getMenu(
            function success(data) {
                $scope.items = data;
            },
            function error(err) {
                notifyService.showRemoveMessage("Cannot load data", err);
            }
        );


        $scope.addItemsToScope = function(title) {
            $scope.filteredItems = [];

            for(var j in $scope.items.dishes){
                var inFolder = $scope.items.dishes[j].inFolder;
                if(inFolder === title){
                    if($scope.items.dishes[j].title){
                        var badgeContent = 0;
                        if(sessionStorage[$scope.items.dishes[j].title]){
                            badgeContent = parseInt(sessionStorage[$scope.items.dishes[j].title]);
                        }
                        $scope.items.dishes[j].badge = badgeContent;
                        $scope.filteredItems.push($scope.items.dishes[j]);
                    }
                }
            }
        };

        $scope.loadMenu = function(title){
            $scope.openedTitle = title;
            $scope.addItemsToScope(title);
            $("#menuBtn").show();
            $location.path('/items');
        }
    }
);