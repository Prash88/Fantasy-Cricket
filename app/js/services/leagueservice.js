/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/2/14
 * Time: 6:34 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.services.leagues', ['fantasyApp.services.firebaseRefs'])
    .factory('Leagues', ['angularFireCollection', 'FireRef',
        function(angularFireCollection, FireRef) {
            return {
                collection: function(cb) {
                    return angularFireCollection(FireRef.leagues(),cb);
                }
                , find: function(leagueId) {
                    return FireRef.leagues().child('/'+leagueId);
                }
                , findUser: function(userId) {
                    return FireRef.users().child('/'+userId);
                }
                , create: function(league, commissioner, cb) {
                    return FireRef.leagues().push({
                        name: league.name,
                        commissionerId: commissioner.id,
                        users: [commissioner.id]
                    }, cb).name();
                }
                , updateUser: function(key, id, len, cb) {
                    return FireRef.leagues().child('/'+key).child('/users').child(len).set(id, cb);
                }
                , notifyUser: function(userid, notifyid, notifyname, cb) {
                    return FireRef.users().child('/'+userid).child('/notifications').child('/'+notifyid).set(notifyname, cb);
                }
                , removeLeague: function(leagueId) {
                    var league = FireRef.leagues().child('/'+leagueId)
                    league.remove();
                }
            }
        }])