/**
 * Ionic Shop Plus (Advanced Edition)
 *
 * @version: v4.0
 * @date: 2017-02-05
 * @author: Noodlio <noodlio@seipel-ibisevic.com>
 * @website: www.noodl.io
 *
*/

// !important settings
// Please fill in the following constants to get the project up and running
//
var LIMITVALUE      = 10000000;

angular.module('noodlio', [
  'ui.router',
  'naif.base64',
  'btford.markdown',
  'noodlio.controllers-account',
  'noodlio.controllers-home',
  'noodlio.controllers-categories',
  'noodlio.controllers-settings-fees',
  'noodlio.controllers-items',
  'noodlio.controllers-sales',
  'noodlio.controllers-navbar',
  'noodlio.controllers-submit',
  'noodlio.services-auth',              // v3
  'noodlio.services-settings',          // v3
  'noodlio.services-products',          // v3 identical to ionic-app
  'noodlio.services-orders',            // v3
  'noodlio.services-utils',             // -
  'noodlio.services-fb-functions'       // v3
  ]
)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/admin/home');
    $stateProvider

    // abstract state in the form of a navbar
    .state('admin', {
        url: '/admin',
        templateUrl: '/templates/navbar.html',
        abstract: true,
        controller:'NavBarCtrl as navbar',
    })

    // home
    .state('admin.home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller:'HomeCtrl as home',

    })

    .state('admin.categories', {
        url: '/categories',
        templateUrl: '/templates/categories.html',
        controller:'CategoriesCtrl as categories',
    })

    .state('admin.settings-fees', {
        url: '/settings/fees',
        templateUrl: '/templates/settings-fees.html',
        controller:'SettingsFeesCtrl as settings',
    })

    .state('admin.login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller:'AccountCtrl as account',
    })

    .state('admin.items', {
        url: '/items',
        templateUrl: '/templates/items.html',
        controller:'ItemsCtrl as items',
    })

    .state('admin.sales', {
        url: '/sales',
        templateUrl: '/templates/sales.html',
        controller:'SalesCtrl as sales',
    })
    .state('admin.sales-detail', {
        url: '/sales/:index/:orderId',
        templateUrl: '/templates/sales-detail.html',
        controller:'SalesDetailCtrl as sdetail',
    })

    .state('admin.submit', {
        url: '/submit/:productId',
        templateUrl: '/templates/submit.html',
        controller:'SubmitCtrl as submit',
    })


})



.directive('itemCols', function() {
  return {
    templateUrl: 'templates/directives/item-cols.html'
  };
})

.directive('attributeSettings', function() {
  return {
    templateUrl: 'templates/directives/attribute-settings.html'
  };
})

.directive('checkoutCartOverview', function() {
  return {
    templateUrl: 'templates/directives/checkout-cart-overview.html'
  };
})
