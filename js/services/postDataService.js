app.factory('postDataService',
    function ($http, baseServiceUrl) {
        return {
            postData: function(data, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/processOrders/processOrders.php',
                    data: data
                };
                $http(request).success(function() {
                    success();
                }).error(error);
            }
        }
    }
);
