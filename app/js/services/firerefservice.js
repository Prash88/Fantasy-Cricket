/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/2/14
 * Time: 6:31 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.services.firebaseRefs', [])
    .factory('FireRef', ['FBURL', 'Firebase',
        function(FBURL, Firebase) {
            return {
                leagues: function() {
                    return new Firebase(FBURL+'/leagues');
                }
                , users: function() {
                    return new Firebase(FBURL+'/users');
                }
                , players: function() {
                    return new Firebase(FBURL+'/players');
                }
            }
        }])