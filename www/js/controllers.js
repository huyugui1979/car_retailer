angular.module('starter.controllers', ["ionic"])

    //关于我们
    .controller('AboutCtrl',function($scope,$state){
        $scope.back = function(){
            $state.go('tab.dash')
        }
    })
    //案例编辑@@@@@@@@@
    .controller('AddCtrl',function($scope,$cordovaImagePicker,$state){


        $scope.fanhui = function () {
            $state.go('feedback')
        }

        $scope.data =[
            {
                user:'We manufacture, in a very awkward time。' +
                'If tomorrow will disappear, I lost more treasures.' +
                ' I am glad I am I, be you love me',
                desc:'Cool cool light',
                image:
                {
                    file1:'img/car1.jpg',
                    file2:'img/car2.jpg',
                    file3:'img/car3.jpg',
                    file4:'img/car5.jpg'
                }

            }
        ]
        $scope.pickImage = function () {

            console.log("haha");

            var options = {
                maximumImagesCount: 4,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0]
                    $scope.imgSrc1 = results[1]
                    $scope.imgSrc2 = results[2]
                    $scope.imgSrc3 = results[3];
                }, function (error) {
                    // error getting photos
                });

        }
    })


    //我的门店
    .controller('AddressCtrl', function($scope,$state){
        $scope.data = [
            {
                user:"134",name:"尔康汽车维修金湾店",
                address:'珠海市金湾区科干院',
                image:'img/car1.jpg'
            },
            {
                user:"134",
                name:"尔康汽车维修香洲店",
                address:'珠海市金湾区科干院',
                image:'img/car2.jpg'},
            {
                user:"134",
                name:"尔康汽车维修拱北店",
                address:'珠海市金湾区科干院',
                image:'img/car3.jpg'}
        ];

        $scope.fanhui = function(){
            $state.go("tab.dash");
        };
        $scope.add = function(){
            $state.go("direct");
        };
    })



    //预约情况
    .controller('CheckCtrl', function ($scope,$state,Chats){
        $scope.back = function(){
            $state.go("tab.dash");
        }
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })


    //分店位置
    .controller('DirectCtrl',function( $ionicGesture,$scope,$state, $window, $interval,$ionicPopup){

    $scope.store = {};
    $scope.data = [
        {
            user:"134",name:"XXX汽车维修店红旗店",
            address:'珠海市金湾区科干院',
            image:'img/car5.jpg'
        },
        {
            user:"134",
            name:"XX汽车维修店香洲店",
            address:'珠海市金湾区科干',
            image:'img/car2.jpg'},
        {
            user:"134",
            name:"XX汽车维修店科干店",
            address:'1',
            image:'img/car5.jpg'}
    ];



    $scope.back = function(){
        $state.go("tab.dash")
    }

    var map = new BMap.Map("allmap");
    var point = new BMap.Point(113.40,22.07);
    map.centerAndZoom(point,16);
    var dd=null;
    var ff=null;



    //根据地址解析位置
    $scope.send = function () {
        //判断是否已经有重复地址
        if ($scope.store.address == $scope.data[0].address) {
            alert('同一个方，您要开两个店么？')
        }else{
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint($scope.store.address, function (point) {
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                    map.addEventListener("click", function(){
                        alert('您确定添加这个地址为的店面么？')


                        //    将用户添加的地址和名称传到后台的 后台接口


                    });
                } else {
                    alert("您选择地址没有解析到结果!");
                }
            }, "珠海市");
        }
    }

})


    //问题反馈
    .controller('EditCtrl', function ($scope,$state){
        $scope.back = function(){
            $state.go("tab.account");
        }

    })




    //添加优惠
    .controller('EditorCtrl', function($scope,$state,$cordovaImagePicker) {
        $scope.back = function(){
            $state.go("tab.dash");
        }
        $scope.kk= true;
        $scope.ff= false;
        $scope.imgSrc = '';
        //选择图片

        $scope.pickImage = function(){
            $scope.kk= false;
            $scope.ff= true;
            console.log("选了!");
            var options = {
                maximumImagesCount: 1 ,
                width: 800 ,
                height: 800 ,
                quality: 80
            };
            $cordovaImagePicker.getPictures(options) //将options的数组赋于results
                .then(function(results){
                    console.log(results);
                    $scope.imgSrc = results[0];//因为options是一个数组，所以要调用他们必须加多后面的后缀
                },function (error){
                    //将图片保存在error
                })
        }

    })


    //商家介绍
    .controller('FavoriteCtrl', function ($scope,$state) {

        $scope.back = function () {
            $state.go("tab.dash");
        }
        $scope.update = function () {
            $state.go("update");
        }
        $scope.data = {
            name:'汽车维修店',
            phone:'13800138000',
            image:'img/car2.jpg',
            desc:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                    'the content is from a card-body consisting of an image and paragraph text. The footer'+
                    'consists of tabs, icons aligned left, within the card-footer.'

        }

    })


    //案例编辑@@@@@@@@@@
    .controller('FeedbackCtrl', function ($scope,$state){


            $scope.data = [
                {
                    user:'51351',
                    name:'汽车照明',
                    title:'汽车安全对于车辆来说...',
                    content:[{desc:'超高性能',type:'image',file:'img/car1.jpg'}]
                },
                {
                    user:'51351',
                    name:'性能提升',
                    title:'现实',
                    content:[{desc:'超高性能',type:'image',file:'img/car2.jpg'}]
                },
                {
                    user:'51351',
                    name:'保养改装',
                    title:'现实',
                    content:[{desc:'超高性能',type:'image',file:'img/car3.jpg'}]
                },
                {
                    user:'51351',
                    name:'外观美化',
                    title:'现实',
                    content:[{desc:'超高性能',type:'image',file:'img/show1.png'}]
                }

            ]

        $scope.test = function(){
            $state.go("tab.dash");
        }
        $scope.add = function(){
            $state.go("add");
        }

        //image picker


    })



    //产品使用帮助
    .controller('HelpCtrl',function($scope,$state){
        $scope.back = function(){
            $state.go('tab.dash')
        }
    })


    //用户登录
    .controller('LoginCtrl',function($scope,$state,$ionicPopup){
        $scope.back = function(){
            $state.go('tab.account')

        }
        $scope.users = {username:'car',password:'123'};

        $scope.login = function(){
            if($scope.users.username == 'car' && $scope.users.password == '123'){
                $state.go('tab.dash');
            }else{
                $ionicPopup.alert({
                    title:'警告',
                    template:'账号或密码错误'
                })
            }
        }
    })


    //查看留言
    .controller('MessageCtrl', function($scope, $state){

        $scope.back = function(){
            $state.go("tab.dash");
        };
        $scope.data = [
            {
                user:{name:'小红'},
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                        'the content is from a card-body consisting of an image and paragraph text. The footer'+
                        'consists of tabs, icons aligned left, within the card-footer.'
            },
            {
                user:{name:'小蓝'},
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                'the content is from a card-body consisting of an image and paragraph text. The footer'+
                'consists of tabs, icons aligned left, within the card-footer.'
            },
            {
                user:{name:'小青'},
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                'the content is from a card-body consisting of an image and paragraph text. The footer'+
                'consists of tabs, icons aligned left, within the card-footer.'
            }
        ]

    })


    //修改资料
    .controller('ModifyInformationCtrl',function($scope,$state){
        $scope.aa = {
            username:'James',
            userage:'20',
            useremail:'123456789@qq.com',
            userphone:'13800138000'
        };


        $scope.success = function(){

            user.name = $scope.name;
            user.age = $scope.age;
            user.email = $scope.email;
            user.phone = $scope.phone;
            $state.go('settings');
        }
    })


    //服务项目@@@@@@
    .controller('ProductsCtrl',function($ionicPopup,$scope,$cordovaImagePicker,$state){
        $scope.back = function(){
            $state.go("tab.dash");
        }
        $scope.add = function(){
            $state.go("show");
        }

        $scope.data = [
            {
                id:0,
                name:'洗车',
                desc:'高压洗车，无接触洗车',
                image:'img/car1.jpg'
            },
            {
                id:1,
                name:'美容',
                desc:'车身美容、内部美容、漆面处理、汽车防护',
                image:'img/car2.jpg'
            }
        ]

            $scope.edit = function(aa){


                $ionicPopup.alert({
                    title: '抱歉~',
                    template:aa
                })
            };




    })
    //用户注册
    .controller('RegisterCtrl', function($scope,$state,$ionicPopup) {

        $scope.back = function(){
            $state.go('tab.account');
        }
        $scope.showAlert = function() {

            var alertPopup = $ionicPopup.alert({

                title: '注册成功',
                template: '感谢你的信任！！欢迎使用:D'
            });
        }
    })



    //优惠活动@@@@@@@
    .controller('SaleCtrl',function($scope,$state){
        $scope.back = function() {
            $state.go("tab.dash");
        }
        $scope.pfEditor = function(){
            $state.go("editor");

        }
        $scope.data = [
            {
                title:'新客户套餐',
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                        'the content is from a card-body consisting of an image and paragraph text. The footer'+
                        'consists of tabs, icons aligned left, within the card-footer.',
                image:'img/car3.jpg'
            },
            {
                title:'新客户套餐',
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                'the content is from a card-body consisting of an image and paragraph text. The footer'+
                'consists of tabs, icons aligned left, within the card-footer.',
                image:'img/car3.jpg'
            },
            {
                title:'新客户套餐',
                content:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,'+
                'the content is from a card-body consisting of an image and paragraph text. The footer'+
                'consists of tabs, icons aligned left, within the card-footer.',
                image:'img/car3.jpg'
            }
        ]
    })


    //我的设置
    .controller('SettingsCtrl', function ($scope,$state){
        $scope.modify = function(){
            $state.go("modifyInformation");
        }

        $scope.back = function(){
            $state.go("tab.account");
        }
    })



    //添加产品
    .controller('ShowCtrl',function($state,$scope,$cordovaImagePicker){

        $scope.kk= true;
        $scope.ff= false;


        $scope.pickImage = function () {
            $scope.kk= false;
            $scope.ff= true;

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
                }, function (error) {
                    // error getting photos
                })


        }

        $scope.fanhui = function () {
            $state.go('products')
        }
        $scope.save = function () {
            //提交保存，post数据
        }

    })


    //个人
    .controller('AccountCtrl', function($scope,$state,$ionicActionSheet) {

        $scope.settings = function(){
            $state.go("settings");
        }
        $scope.feedback = function(){
            $state.go("edit")
        }
        $scope.register = function(){
            $state.go("register");
        }
        $scope.login = function(){
            $state.go("login");
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
                title: title ? title : "豪车",
                description: desc ? desc : "A real traveller's province is boundless.",
                url: url ? url : "http://www.baidu.com",
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



    //首页
    .controller('DashCtrl',function($scope,$state) {

        $scope.show = function(){
            $state.go("favorite")
        }
        $scope.chat = function(){
            $state.go("feedback");
        }
        $scope.note = function(){
            $state.go("message");
        }
        $scope.product = function(){
            $state.go("products");
        }
        $scope.check =function(){
            $state.go("check")
        }
        $scope.direct = function(){
            $state.go("address")
        }
        $scope.sale = function(){
            $state.go("sale")
        }
        $scope.help = function(){
            $state.go("help")
        }
        $scope.about = function(){
            $state.go("about")
        }


    })


    //编辑简介
    .controller('UpdateCtrl',function($scope,$cordovaImagePicker,$http){
        $scope.kk= true;
        $scope.ff= false;

        $scope.pickImage = function () {
            $scope.kk=false;
            $scope.ff=true;

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
                })

        }
        $scope.pickImage1 = function () {

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
                    $scope.imgSrc1 = results[0];

                }, function (error) {
                    // error getting photos
                })

        }

        $scope.form={

            title:"",
            tel:"",
            content:""

        }
        $scope.form.submit=function() {
            $http.post('http://huyugui.f3322.org：3001/message',$scope.form)
        }
        $scope.save = function () {
            //商家介绍提交数据接口
            //$http.
        }
    })