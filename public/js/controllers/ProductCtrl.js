/**
 * Created by chirag on 11/12/16.
 */
angular.module('ProductCtrl', []).controller('ProductController', function($scope,Products) {

    $scope.tagline = 'Products are required by everyone!';
    $scope.products=null;
    Products.get()
        .success(function successCallback(data) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("response of Product.get()->",data);
            $scope.products=data.allProducts;
        }).error(function errorCallback(error) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("error in getting response of Products.get()->",error);
            $scope.products={success:error,error:error};
        });

});