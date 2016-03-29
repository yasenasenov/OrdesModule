app.factory('sendOrderService', function($resource, $rootScope, postDataService, notifyService) {
    return{
        sendOrder : function(){
            var objToSend = {};
            var inCartArr = [];

            (function collectFromStorage(){
                for (var i = 0; i < sessionStorage.length; i++) {
                    if (sessionStorage.key(i) !== "loadedOnce") {
                        var toSplit = sessionStorage[sessionStorage.key(i)].split(",");
                        inCartArr.push({
                            "name": sessionStorage.key(i),
                            "count": toSplit[0]
                        });
                    }
                }
            })();

            objToSend.obj  = localStorage['obj'];
            objToSend.cart = inCartArr;
            objToSend.total = $rootScope.total;
            objToSend.clars = $rootScope.clars;
            objToSend.info = $rootScope.info;
            objToSend.address = localStorage['address'];
            objToSend.username = localStorage['username'];
            objToSend.phone = localStorage['phone'];
            objToSend.ordersNum = localStorage['ordersNum'];

            var dataToSend = JSON.stringify(objToSend);
            postDataService.postData(dataToSend,
                function(){
                    notifyService.showSuccessMessage(
                        "<span class='glyphicon glyphicon-ok-circle'></span>" +
                        "<span style='margin:20px;font-size:1.3em;font-weight: bold'>&nbsp;Поръчката е изпратена успешно</span>"
                    )
                },
                function(){
                    notifyService.showRemoveMessage(
                        "<span style='margin:20px;font-size:1.3em;font-weight: bold'>&nbsp;Поръчката не е изпратена успешно</span>"
                    )
                }
            );
        }
    }
});