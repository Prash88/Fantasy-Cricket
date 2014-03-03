/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/3/14
 * Time: 12:25 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.controllers.players', ['fantasyApp.services.players'])
    .controller('PlayersController', ['$scope','$routeParams', 'angularFire', 'IPL', 'Players',
        function ($scope, $routeParams, angularFire, IPL, Players) {

            $scope.positions = IPL.positions;
            $scope.iplclubs = IPL.clubs;
            $scope.searchsize = {
                "limit": 10
            }
            $scope.strictsearch = {};

            $scope.findPlayers = function() {
                $scope.players = Players.collection();
            }

            $scope.findOnePlayer = function() {
                angularFire(Players.find($routeParams.playerId), $scope, 'player');
            }
        }]);