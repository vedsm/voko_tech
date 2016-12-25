/**
 * Created by ved on 28/11/16.
 */
angular.module('UserService', []).factory('User', ['$http', function($http) {

    return {
        // call to get all users
        get : function() {
            return $http.get('/api/allUsers');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new user
        create : function(userData) {
            return $http.post('/api/addUser', userData);
        },

        // call to DELETE a user
        delete : function(id) {
            return $http.delete('/api/user/' + id);
        }
    }

}]);