/**
 * Created by ved on 28/11/16.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // users page that will use the UserController
        .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })

        // products page that will use the ProductController
         .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductController'
        })

    $locationProvider.html5Mode(true);

}]);