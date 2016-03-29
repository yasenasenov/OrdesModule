app.controller('ClientsMenuController',
    function ($scope, $location, notifyService, getMenuOrderDataService) {
        $("#toHideFromConfirm").show();

        getMenuOrderDataService.getMenuOrder(
            function success(data) {
                $scope.folders = data;
                $("#menuBtn").hide();
            },
            function error(err) {
                notifyService.showRemoveMessage("Cannot load data", err);
            }
        );

        $scope.openedTitle = "Меню";
        $scope.obj = localStorage["obj"];
    }
);