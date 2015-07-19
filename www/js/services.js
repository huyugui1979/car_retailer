angular.module('starter.services', [])

.factory('Chats', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'BMW4s香洲店1',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 1,
        name: 'BMW4s香洲店2',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 2,
        name: 'BMW4s香洲店3',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 3,
        name: 'BMW4s香洲店3',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 4,
        name: 'BMW4s香洲店5',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 5,
        name: 'BMW4s香洲店6',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 6,
        name: 'BMW4s香洲店7',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 7,
        name: 'BMW4s香洲店8',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 8,
        name: 'BMW4s香洲店9',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 9,
        name: 'BMW4s香洲店10',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 10,
        name: 'BMW4s香洲店11',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 11,
        name: 'BMW4s香洲店12',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }, {
        id: 12,
        name: 'BMW4s香洲店13',
        lastText: '日期：2015-01-01',
        face: 'img/car5.jpg'
      }
      ];

      return {
        all: function () {
          return chats;
        },
        remove: function (chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
      }
    })
    .factory('User', function() {

        var o = {
            favorites: []
        }
        o.addSongToFavorites = function(song) {
            // make sure there's a song to add
            if (!song) return false;

            // add to favorites array
            o.favorites.unshift(song);
        }

        return o;
    });