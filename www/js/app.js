// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
      $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
      $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
      $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
      $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
      $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:


      .state('register',{
        url:'/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'

      })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('edit',{
        url:'/edit',
        templateUrl: 'templates/edit.html',
        controller: 'EditCtrl'

      })
      .state('settings',{
        url:'/settings',
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'

      })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
      }
    }
  })
      .state('check',{
        url:'/check',
        templateUrl:'templates/check.html',
        controller:'CheckCtrl'
      })
      .state('feedback',{
        url:'/feedback',
        templateUrl:'templates/feedback.html',
        controller:'FeedbackCtrl'
      })
      .state('favorite',{
        url:'/favorite',
        templateUrl:'templates/favorite.html',
        controller:'FavoriteCtrl'
      })
      .state('orders',{
        url:'/orders',
        templateUrl:'templates/orders.html',
        controller:'OrdersCtrl'
      })
      .state('message',{
        url:'/orders',
        templateUrl:'templates/message.html',
        controller:'MessageCtrl'
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
