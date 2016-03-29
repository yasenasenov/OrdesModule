'use strict';

app.factory('notifyService',
    function () {
        return {
            showRemoveMessage: function(msg) {
                noty({
                        text: msg,
                        type: 'error',
                        layout: 'center',
                        timeout: 2000
                    });
            },
            showSuccessMessage: function(msg){
                noty({
                        text: msg,
                        type: 'confirm',
                        layout: 'center',
                        timeout: 2000
                });
            }
        }
    }
);
