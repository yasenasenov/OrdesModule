app.controller('CartController',
    function($scope, $rootScope, $location, notifyService, addRemoveService, sendOrderService){

        $("#menuBtn").show();

        $scope.delivery = localStorage['delivery'];

        $scope.arrInCart = [];
        for (var i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i) !== "loadedOnce") {
                var toSplit = sessionStorage[sessionStorage.key(i)].split(",");
                $scope.arrInCart.push({
                    "name": sessionStorage.key(i),
                    "count": toSplit[0],
                    "price": toSplit[1],
                    "num": toSplit[2],
                    "idTosend" : sessionStorage.key(i)[0] + sessionStorage.key(i)[1] + toSplit[2]
                });
            }
        }

        $scope.addClarification = function(name,id) {
            var txtValue = $("#" + id).val();

            if(txtValue !== ""){
                $rootScope.clars.push({"name": name, "txtValue": txtValue});
            }
            notifyService.showSuccessMessage("<span style='font-size:1.3em;font-weight: bold'>Уточнението е добавено</span>");
        };

        $scope.removeItemFromCart = function(name,price,num){
            addRemoveService.removeItemFromCart(name,price,num);
        };

        $scope.setInfo = function(info){
            $rootScope.info = info;
            notifyService.showSuccessMessage("<span style='font-size:1.3em;font-weight: bold'>Успешно добавено</span>")
        };

        $scope.sendOrder = function(){
            sendOrderService.sendOrder();
        };

        $scope.hideBtns = function(){
            $('#btnsLessPadding').hide();
        };
        $scope.address = localStorage['address'];
        $scope.phone = localStorage['phone'];

        $scope.editAddress = function(address){
            localStorage['address'] = address;
            $scope.toggleEdit();
        };
        $scope.editPhone = function(phone){
            localStorage['phone'] = phone;
            $scope.toggleEdit();
        };

        $scope.toggleEdit = function(){
            $("#editMobile").toggle();
            $("#edit").toggle();
            $("#editAddressBtn").toggle();
            $("#toHideFromEdit").toggle();
        };

        $scope.showDiv = function(num){
            if(num === 1){
                $("#orderView").toggle();
            }
            if(num === 2){
                $("#addressPhoneDiv").toggle();
            }
            if(num === 3){
                $("#addInfoDiv").toggle();
            }
        }

    }
);