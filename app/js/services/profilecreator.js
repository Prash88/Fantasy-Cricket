'use strict';

angular.module('fantasyApp.services.profileCreator', [])
  .factory('profileCreator', ['Firebase', 'FBURL', '$rootScope', function(Firebase, FBURL, $rootScope) {
    return function(id, name, email, points, favteam, callback) {
      new Firebase(FBURL).child('users/'+id).set({email: email, name: name, points: points, favteam: favteam}, function(err) {
        if( callback ) {
          callback(err);
          $rootScope.$apply();
        }
      });
    }
  }]);