app.factory('addRemoveService',function($rootScope, $location, notifyService){
    return {
        addItem : function(item,price,num){
            $rootScope.badgeCount++;

            $("#" + num + "supp").attr("disabled", false);
            $("#" + num + "clar").attr("disabled", false);

            var innerCount = $("#" + num).text();
            innerCount = parseInt(innerCount) + 1;
            $("#" + num).text(innerCount);

            innerCount = innerCount?innerCount.toString():"1";
            sessionStorage[item] = innerCount + "," + price + "," + num;

            var currPrice = $rootScope.total;
            price = parseFloat(price);
            currPrice = parseFloat(currPrice);
            currPrice = currPrice + price;
            $rootScope.total = currPrice.toFixed(2).toString();

            notifyService.showSuccessMessage(
                    "<span class='glyphicon glyphicon-shopping-cart' style='margin: 20px'></span>" +
                    "<span style='font-size:1.3em;font-weight: bold'>&nbsp;Добавихте " + item + "</span>"
            );
        },
        removeItemFromCart : function(name,price,num) {

            var arr = sessionStorage[name].split(',');
            var innerCount = arr[0];
            innerCount = parseInt(innerCount) - 1;
            if (innerCount >= 0) {
                $rootScope.badgeCount--;

                $("#" + num).text(innerCount);
                notifyService.showRemoveMessage(
                        "<span class='glyphicon glyphicon-shopping-cart' style='margin: 20px'></span>" +
                        "<span style='font-size:1.3em;font-weight: bold'>&nbsp;Премахнахте " + name + "</span>"
                );

                var currPrice = $rootScope.total;
                $rootScope.total = (parseFloat(currPrice) - parseFloat(price)).toFixed(2).toString();

                var itemsCount = parseInt(sessionStorage[name]) - 1;
                if(itemsCount === 0){
                    sessionStorage.removeItem(name);
                }
                if(sessionStorage[name]){
                    sessionStorage[name] = itemsCount.toString() + "," + price + "," + num;
                }
            }
        }
    }
});