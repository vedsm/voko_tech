/**
 * Created by ved on 28/11/16.
 */
angular.module('UserCtrl', []).controller('UserController', function($scope,User) {

    $scope.tagline = 'users are required by everyone!';
    $scope.users=null;
    User.get()
        .success(function successCallback(data) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("response of User.get()->",data);
            $scope.users=data.allUsers;
        }).error(function errorCallback(error) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("error in getting response of User.get()->",error);
            $scope.users={success:error,error:error};
        });

});