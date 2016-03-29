'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://pizza-sanmarco.com/iorder.me/');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/menuView.html',
        controller: 'ClientsMenuController'
    });

    $routeProvider.when('/items', {
        templateUrl: 'templates/showItems.html',
        controller: 'ShowItemsController'
    });

    $routeProvider.when('/cart', {
        templateUrl: 'templates/cartView.html',
        controller: 'CartController'
    });

    $routeProvider.when('/order', {
        templateUrl: 'templates/orderView.html',
        controller: 'CartController'
    });

    $routeProvider.when('/confirm', {
        templateUrl: 'templates/confirmView.html',
        controller: 'ConfirmController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});
