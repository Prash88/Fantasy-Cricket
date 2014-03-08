/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/5/14
 * Time: 10:51 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.controllers.user', ['fantasyApp.services.user'])
    .controller('UserController', ['$scope','$routeParams','IPL',
        function($scope, $routeParams, IPL) {
            $scope.iplplayers = IPL.players;
            $scope.iplclubs = IPL.clubs;
            $scope.positions = IPL.positions;
            $scope.iplclub = IPL.clubs[$routeParams['iplteamindex']];
            $scope.setSearchText = function()
            {
                $scope.searchText = $scope.selectclub.name;
            }
        }]);