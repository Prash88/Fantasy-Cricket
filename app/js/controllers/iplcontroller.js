/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/2/14
 * Time: 4:07 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('fantasyApp.controllers.ipl', ['fantasyApp.services.ipl'])
    .controller('IPLController', ['$scope','$routeParams','IPL',
        function($scope, $routeParams, IPL) {
            $scope.iplplayers = IPL.players;
            $scope.iplclubs = IPL.clubs;
            $scope.positions = IPL.positions;
            $scope.iplclub = IPL.clubs[$routeParams['iplteamindex']];
        }]);