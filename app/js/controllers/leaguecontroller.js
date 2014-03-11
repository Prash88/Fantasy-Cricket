/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/2/14
 * Time: 6:36 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.controllers.leagues', ['fantasyApp.services.leagues'])
    .controller('LeaguesController', ['$scope','$routeParams', '$location', 'angularFire', 'Leagues',
        function($scope, $routeParams, $location, angularFire, Leagues) {

            $scope.league = {};
            $scope.leagueId = $routeParams.leagueId;

            $scope.findLeagues = function() {
                $scope.searchText = $scope.auth.id;
                $scope.leagues = Leagues.collection();
            }

            $scope.findOneLeague = function (leagueId) {
                if(!!$scope.leagueId) {
                    angularFire(Leagues.find($routeParams.leagueId), $scope, 'league')
                }
            }

            $scope.findNotifications = function () {
                if(!!$scope.auth.id) {
                    angularFire(Leagues.findUser($scope.auth.id).child('/notifications'), $scope, 'notifications')
                }
            }

            $scope.createLeague = function() {
                var leagueId = Leagues.create($scope.league, $scope.auth, function(err) {
                    if (!err) {
                        $scope.league = null;
                        $location.path('/leagues/'+leagueId);
                        $scope.$apply();
                    }
                });
            }

            $scope.addtoleague = function() {
                var check;
                if(!!$scope.key) {
                    check = Leagues.find($scope.key);
                }
                check.once('value', function(snapshot) {
                    if(snapshot.val() === null) {
                    } else {
                            var users = snapshot.val().users;
                            var commid = snapshot.val().commissionerId;
                            var alreadyThere = false;
                            var len = 0;
                            users.filter(function(val) {
                                len = len+1;
                                if($scope.auth.id == val)
                                    alreadyThere = true;
                                });
                            if(!alreadyThere)
                            {
                                //Leagues.updateUser($scope.key, $scope.auth.id, len, function(err) {
                                var user = Leagues.findUser($scope.auth.id);
                                user.once('value', function(snapshot) {
                                    if(snapshot.val() === null) {
                                    } else {
                                        var username = snapshot.val().name;
                                        Leagues.notifyUser(commid, $scope.auth.id, username, function(err) {
                                            if (!err) {
                                                $scope.$apply();
                                            }
                                            else
                                            {
                                                console.log("noooo");
                                            }
                                        });
                                    }
                                });
                            }
                    }
                });
            }

            $scope.removeLeague = function(leagueId) {
                Leagues.removeLeague(leagueId);
            }

        }])