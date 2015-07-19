angular.module('starter.controllers', ["ionic"])

.controller('DashCtrl', function($scope,$state){
        $scope.add = function(){
            $state.go("favorite");
        }
    })
    .controller('SettingsCtrl', function ($scope,$state){
        $scope.edit = function(){
            $state.go("edit");
        }

        $scope.back = function(){
            $state.go("tab.account");
        }
    })
    .controller('EditCtrl', function ($scope,$state){
        $scope.back = function(){
            $state.go("settings");
        }



    })
.controller('ChatsCtrl',function($scope,Chats,$state,$ionicModal, $timeout,$cordovaBarcodeScanner) {

       $scope.show = function(){
            $state.go("favorite")
        }
        $scope.chat = function(){
            $state.go("feedback");
        }
        $scope.orders = function(){
            $state.go("orders");
        }
        $scope.edit = function(){
            $state.go("message");
        }
        $scope.barcode = "";
        $scope.scanBarcode = function(){
            $cordovaBarcodeScanner.scan().then(function(imageData){
                $scope.barcode = imageData.text;
                console.log("****barcode format:"+imageData.format);
            }, function(error){
                console.log("*****an error occured:"+error);
            });
        };


        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };
        $scope.register = function(){
            $state.go("register");
        }

        $scope.check = function(){
            $state.go("check");
        }

      $scope.$broadcast("scroll.infiniteScrollComplete");
    })



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {


        $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function($scope,$state,$ionicActionSheet) {
        $scope.orders = function(){
            $state.go("orders");
        }
        $scope.settings = function(){
            $state.go("settings");
        }
        $scope.edit = function(){
            $state.go("edit")
        }

        $scope.favorite = function(){
            $state.go("favorite");
        }

        $scope.share = function(title, desc, url, thumb) {
            $ionicActionSheet.show({
                buttons: [
                    { text: '<b>分享至微信朋友圈</b>' },
                    { text: '分享给微信好友' }
                ],
                titleText: '分享',
                cancelText: '取消',
                cancel: function() {
                    // 取消时执行
                },
                buttonClicked: function(index) {
                    if(index == 0) {
                        $scope.shareViaWechat(WeChat.Scene.timeline, title, desc, url, thumb);
                    }
                    if(index ==1 ) {
                        $scope.shareViaWechat(WeChat.Scene.session, title, desc, url, thumb);
                    }
                }
            });
        }
        $scope.shareViaWechat = function(scene, title, desc, url, thumb) {
            // 创建消息体
            var msg = {
                title: title ? title : "行者无疆",
                description: desc ? desc : "A real traveller's province is boundless.",
                url: url ? url : "http://www.xingzhewujiang.xinligen.osnuts.com",
                thumb: thumb ? thumb : null
            };
            WeChat.share(msg, scene, function() {
                $ionicPopup.alert({
                    title: '分享成功',
                    template: '感谢您的支持！',
                    okText: '关闭'
                });
            }, function(res) {
                $ionicPopup.alert({
                    title: '分享失败',
                    template: '错误原因：' + res + '。',
                    okText: '我知道了'
                });
            });
        };
    })
    .controller('CheckCtrl', function ($scope,$state,Chats){
        $scope.back = function(){
            $state.go("tab.chats");
        }
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }

    })
    .controller('FeedbackCtrl', function ($scope,$state,$cordovaImagePicker){
        $scope.back = function(){
            $state.go("tab.chats");

        }
        //image picker

        $scope.pickImage = function () {

            console.log("haha");

            var options = {
                maximumImagesCount: 1,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0]
                    $scope.imgSrc1 = results[1]
                    $scope.imgSrc2 = results[2];
                }, function (error) {
                    // error getting photos
                });

        }
    })
    .controller('FavoriteCtrl', function ($scope,$state,$cordovaImagePicker,User,$stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
        $scope.back = function () {
            $state.go("tab.chats");
        }
        //image picker
        $scope.pickImage = function () {

            console.log("haha");

            var options = {
                maximumImagesCount: 1,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0];
                }, function (error) {
                    // error getting photos
                });

        }
        $scope.favorites = User.favorites;
    })
.controller('RegisterCtrl', function($scope,$state,$ionicPopup) {

        $scope.back = function(){
            $state.go('tab.chats');
        }
        $scope.showAlert = function() {

            var alertPopup = $ionicPopup.alert({

                title: '注册成功',
                template: '感谢你的信任！！欢迎使用:D'
            });
        }
})
    .controller('ProductsCtrl',function($scope,$cordovaImagePicker){
        $scope.pickImage = function () {

            console.log("haha");

            var options = {
                maximumImagesCount: 3,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0];
                }, function (error) {
                    // error getting photos
                });

        }


    })
    .controller('OrdersCtrl', function($scope,$ionicPopup,$state){


        $scope.back = function(){
            $state.go("tab.chats");
        }

        $scope.showConfirm = function() {
            $ionicPopup.confirm({
                title: "取消预约",
                template: "确定取消预约"
            })
                .then(function(res) {
                    if(res) {
                        $scope.status = "感谢您的意见";
                    } else {
                        $scope.status = "感谢您的反馈 ";
                    }
                });
        };
    })
    .controller('MessageCtrl', function($scope, $state,$http){
        $scope.back = function(){
            $state.go("tab.chats");
        };
        $scope.form ={};
        $scope.form.submit=function() {
            $http.post('http://localhost:3000/message',$scope.form)

                .success(function () {
                    $state.go('messageblock',{},{reload:true});
                })
        }
    })