'use strict';

angular.module('fantasyApp.controllers.signup', [])
  .controller('SignupCtrl', ['$scope', 'loginService', '$location', 'IPL',
    function($scope, loginService, $location, IPL) {
      $scope.iplclubs = IPL.clubs;
      if (!!$scope.auth) {
        $location.path('/');
      }
      $scope.$on('angularFireAuth:login', function () {
        $location.path('/');
      })

      $scope.err = null;

      $scope.login = function(callback) {
        $scope.err = null;
        loginService.login($scope.email, $scope.pass, '/', function(err, user) {
          $scope.err = err||null;
          typeof(callback) === 'function' && callback(err, user);
        });
      };

      $scope.provider = "default";

      $scope.createAccount = function() {
        if( !$scope.name ) {
          $scope.err = 'Please enter your name';
        }
        else if( !$scope.email ) {
          $scope.err = 'Please enter an email address';
        }

        else if( !$scope.pass ) {
          $scope.err = 'Please enter a password';
        }
        else if( !$scope.favouriteteam ) {
            $scope.err = 'Please enter a favouriteteam';
        }
        else {
          loginService.createAccount($scope.name, $scope.email, $scope.pass, function(err, user) {
            if( err ) {
              $scope.err = err;
            }
            else {
              $scope.login(function(err) {
                if( !err ) {
                  loginService.createProfile(user.id, $scope.name, user.email, 0, $scope.favouriteteam);
                }
              });
            }
          });
        }
      };
    }]);