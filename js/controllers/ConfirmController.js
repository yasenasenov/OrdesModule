app.controller('ConfirmController', function($scope, $http){
    $("#toHideFromConfirm").hide();

    var relTimer = setInterval(function(){myReload()},10000);

    function myReload(){
        $http.get('http://iorder.me/objects/' + localStorage['obj'] + '/newOrder.txt')
            .success(function(data) {
//                data = JSON.parse(data);
                for(var i in data.orders){
                    if(data.orders[i].obj === localStorage['obj'] && data.orders[i].username === localStorage['username']){
                        if(data.orders[i].confirmed === "yes"){
                            $scope.confirmed = data.orders[i].confirmed;
                        }
                    }
                }
            });
    }

    myReload();

    $scope.deleteOrder = function deleteOrder(username, total, obj){
        $http.post("http://iorder.me/processOrders/deleteOrders.php",
            {
                username: username,
                total: total,
                obj: obj
            });
    }
});
