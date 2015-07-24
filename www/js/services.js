angular.module('starter.services', [])

.factory('Chats', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'James',
        lastText: '预约日期：2015-01-01',
        face: 'img/car2.jpg'
      }, {
        id: 1,
        name: 'Mike',
        lastText: '日期：2015-01-02',
        face: 'img/car1.jpg'
      }, {
        id: 2,
        name: 'Jeffrey',
        lastText: '日期：2015-01-03',
        face: 'img/car3.jpg'
      }, {
        id: 3,
        name: 'tom',
        lastText: '日期：2015-01-04',
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
      };
    });
