app.factory('getMenuOrderDataService', function($resource, baseServiceUrl){
    var orderData = $resource(
            baseServiceUrl +
//                '/ang/menuOrder.txt',
            '/order/data/folders?obj=main',
        null,
        {
            'getAll': {method:'GET'}
        }
    );

    return {
        getMenuOrder: function(success, error) {
            return orderData.getAll(success, error);
        }
    }

});

app.factory('getMenuDataService', function($resource, baseServiceUrl){
        var menuData = $resource(
                baseServiceUrl +
//                    '/Menu/menu.txt',
                '/order/data/items?obj=main',
            null,
            {
                'getAll': {
                    method:'GET'
                }
            }
        );
        return {
            getMenu: function(success, error) {
                return menuData.getAll(success, error);
            }
        }

});

app.factory('getSuppDataService', function($resource, baseServiceUrl){
    var suppData = $resource(
            baseServiceUrl +
//                '/Menu/supplements.txt',
            '/order/data/supplements?obj=' + localStorage['obj'],
        null,
        {
            'getAll': {method:'GET'}
        }
    );

    return {
        getSupplements: function(success, error) {
            return suppData.getAll(success, error);
        }
    }

});