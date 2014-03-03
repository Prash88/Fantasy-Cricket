/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/3/14
 * Time: 12:24 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.services.players', ['fantasyApp.services.firebaseRefs'])
    .factory('Players', ['FBURL', 'Firebase', 'angularFireCollection', 'FireRef',
        function(FBURL, Firebase, angularFireCollection, FireRef) {
            return {
                collection: function() {
                    return angularFireCollection(FireRef.players());
                }
                , find: function(playerId) {
                    return FireRef.players().child(playerId);
                }
            }
        }])