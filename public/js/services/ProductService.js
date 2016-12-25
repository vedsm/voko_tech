/**
 * Created by chirag 11/12/16
 */
angular.module('ProductService', []).factory('Products', ['$http', function($http) {

    return {
        // call to get all products
        get : function() {
            return $http.get('/api/allProducts');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new product
        create : function(productData) {
            return $http.post('/api/addProduct', productData);
        },

        // call to DELETE a product
        delete : function(id) {
            return $http.delete('/api/product/' + id);
        }
    }

}]);