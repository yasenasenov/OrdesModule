app.controller('ShowItemsController',
    function ($scope, $rootScope, $location, notifyService, addRemoveService, getSuppDataService) {
        $scope.addItem = function(title,price,num) {
            addRemoveService.addItem(title,price,num)
        };

        $scope.removeItemFromCart = function(title,price,num){
            addRemoveService.removeItemFromCart(title,price,num)
        };

        $scope.addSupplement = function(itemTitle,suppTitle,price,num){
            $scope.addItem(suppTitle + " за " + itemTitle,price,num);
        };

        getSuppDataService.getSupplements(
            function success(data){
                $scope.supplements = data;
            },
            function error(err){
                console.log("load supplements unsuccessful!" + err)
            }
        );
    }
);