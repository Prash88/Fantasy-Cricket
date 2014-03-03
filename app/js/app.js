'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('fantasyApp',
  [ 'fantasyApp.config'
  , 'fantasyApp.controllers.header'
  , 'fantasyApp.controllers.signin'
  , 'fantasyApp.controllers.signup'
  , 'fantasyApp.controllers.ipl'
  , 'fantasyApp.controllers.leagues'
  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )
