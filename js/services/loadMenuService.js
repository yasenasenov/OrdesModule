app.factory('loadMenuService',function($scope ){
    return  {
        addItemsToScope: function(title,home) {
            $("#title").show();
            $("#menuBtn").show();
            $("#panel").html("");
            var menu = $scope.items;
            menu = JSON.parse(menu);
        }
    }
});


//        for(var j in menu.dishes){
//            var inFolder = menu.dishes[j].inFolder;
//            if(inFolder === title){
//                if(menu.dishes[j].title){
//                    var badjeContent = "0";
//                    if(localStorage[obj.dishes[j].title]){
//                        badjeContent = parseInt(localStorage[obj.dishes[j].title]);
//                    }
//
//                    menuArr.push(menu.dishes[j]);

//                        if(home === obj.dishes[j].home){
//                            $("#panel").append(
//                                    '<div class="item">' +
//                                    '<div class="title">' + obj.dishes[j].title + " " +'</div>' +
//                                    '<div class="myBadge"><span class="glyphicon glyphicon-shopping-cart"></span><span id="' + obj.dishes[j].num + '" >' + badjeContent +'</span></div>' +
//                                    '<div class="toLeft"><img class="orderImg" src="../images/order.png" onclick="addItem(\''+ obj.dishes[j].title + '\',\''+ obj.dishes[j].price + '\',\''+ obj.dishes[j].num +'\')"></div>' +
//                                    '<div class="toLeft"><img class="orderImg" src="../images/remove.png" onclick="removeItem(\''+ obj.dishes[j].title + '\',\''+ obj.dishes[j].price + '\',\''+ obj.dishes[j].num +'\')"></div>' +
//                                    '<span class="price label label-warning">' + obj.dishes[j].weight + " " + obj.dishes[j].price + 'лв.</span>'
//
//                            );
//                            if(obj.dishes[j].opis != ""){
//                                $("#panel").append('<div class="price opis"> (' + obj.dishes[j].opis + ')</div><hr>');
//                            }
//                            else{
//                                $("#panel").append('</div><hr>');
//                            }
//                        }
//                }
//                $("#title").html(title);
//            }
//        }