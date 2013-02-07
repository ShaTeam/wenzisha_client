(function ($, window) {
    var $wrapper = $('#wrapper'),
        $helper = $('#helper')
        ;

//    var HOST = 'http://localhost:88';
//    var HOST = 'http://10.13.125.79:88';
    var HOST = 'http://s.wenzisha.com';

    var Server = {
        'open' : HOST + '/room/open?callback=?',
        'join' : HOST + '/room/join?callback=?',
        'setPuzzle' : HOST + '/room/set-puzzle?callback=?',
        'getPlayers' : HOST + '/room/get-players?callback=?',
        'getAmount' : HOST + '/room/get-amount?callback=?',
        'getStatus' : HOST + '/room/get-status?callback=?',
        'getPuzzle' : HOST + '/player/get-puzzle?callback=?',
        'randomPuzzle' : HOST + '/room/random-puzzle?callback=?',
        'startGame' : HOST + '/room/start-game?callback=?',
        'endGame' : HOST + '/room/end-game?callback=?'
    }

    var ROLE = {
        'UNKOWN':0,
        'GOD':1,
        'PEOPLE':2,
        'ONI':3,
        'IDIOT':4
    }

    var STATUS = {
        'IDLE': 0,
        'JOIN': 1,
        'PUZZLE': 2,
        'GAME': 3
    }

    var TipInfo = {
        '1': '没有指定的房间',
        '2':'没有指定的玩家',
        '4':'房间已满',
        '8':'当前指向的不是管理员',
        '16': '当前玩家没有权限（不是Room的成员）',
        '32': '当前玩家不是JOIN的状态',
        '1024': '未知错误'
    }

    var CONST = {
        'RANDOM_PUZZLE_AJAX_ERROR':'randomPuzzle Ajax error!',
        'GET_PLAYERS_AJAX_ERROR':'God getPlayers Ajax error!',
        'GET_PUZZLE_ROLE_ERROR':'getPuzzle role error!',
        'TIME_OUT':'timeout',
        'JSONP_AJAX_ERROR': 'jsonP Ajax error!',
        'NOT_VALID_GET_PALYERS_STATUS':'getPlayers status not valid'
    }


//    if (window.navigator.userAgent.indexOf('iPhone') != -1) {
//        if (window.navigator.standalone == true) {
//
//        }else{
//            document.write('<p>Tap the + button and choose "Add to Home Screen"</p>');
//        }
//    }else{
//        document.location.href = 'please-open-from-iphone.html';
//    }

    //神
    var God = {
        certificate: {
            adminId: "",
            roomId: -1
        },
        status: -1,
        role: {
            peopleWord: '',
            idiotWord: ''
        },
        playerNumTick: null,
        randomPuzzle: function(callback){
            $.ajax({
                type: 'GET',
                url: Server.randomPuzzle,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId
                },
                dataType: 'jsonp',
                success: function(data){
                    if(data && data.words){
                        callback(data);
                    }
                },
                error: function(xhr, type){
                    throw Error(CONST.RANDOM_PUZZLE_AJAX_ERROR);
                }
            });
        },
        startGame:function(callback){
            $.ajax({
                type: 'GET',
                url: Server.startGame,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId,
                    words:God.role.peopleWord + ',' + God.role.idiotWord
                },
                dataType: 'jsonp',
                success: function(data){
                    if(data && (typeof data.code == 'number') && (data.code == 0)){

                        callback(data);
                    }
                },
                error: function(xhr, type){
                    throw 'God setTopic Ajax error!';
                }
            });
        },
        getAmount:function(callback){
            //确认人数中...
            if(God.status == STATUS.PUZZLE){
                $.ajax({
                    type: 'GET',
                    url: Server.getAmount,
                    data: {
                        roomId: God.certificate.roomId,
                        adminId: God.certificate.adminId
                    },
                    dataType: 'jsonp',
                    success: function(data){
                        if(data){
                            callback(data);
                        }
                    },
                    error: function(xhr, type){
                        throw Error(CONST.GET_PLAYERS_AJAX_ERROR);
                    }
                });


                God.playerNumTick = setTimeout(arguments.callee,2000,callback);
            }
        },
        endGame: function(callback){},
        open: function(callback){
            $.ajax({
                type: 'GET',
                url: Server.open,
                data: {},
                dataType: 'jsonp',
                context: $('body'),
                success: function(data){
                    //保存凭证
                    if(data && (typeof data.code == 'number') && (data.code == 0)){
                        callback(data);
                    }
                },
                error: function(xhr, type){
                    stage.mask.hide();
                    throw 'open Ajax error!';
                }
            });
        },
        getPlayers : function(callback){
            $.ajax({
                type: 'GET',
                url: Server.getPlayers,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId
                },
                dataType: 'jsonp',
                success: function(data){
                    if(data && data.playerList){
                        callback(data);
                    }
                },
                error: function(xhr, type){
                    throw 'God setTopic Ajax error!';
                }
            });
        },
        callbackGetPlayers: function(data){
            var peopleNum = 0,
                idiotNum = 0,
                oniNum = 0,
                $status = $('.playerNum'),
                role = '',
                len =  data.playerList.length
                ;

            for(var i = 0;i < len; i++){

                role =  data.playerList[i].character;
                if(role == 3){
                    oniNum++ ;
                }
                else if(role == 2){
                    peopleNum++;
                }
                else if(role == 4){
                    idiotNum++;
                }
            }

            var tipSnap = '<strong>'+ peopleNum + '</strong>个平民,\
                                          <strong>'+ idiotNum + '</strong>个傻子,\
                                          <strong>'+ oniNum + '</strong>个鬼'
                ;

            $status.html(tipSnap);
            $('.start').css('background-color','black').css('color','white').find('label').not('.playerNum').text('天黑请闭眼');

            $('.f-r-3').addClass('f-r-2').removeClass('f-r-3');

            window.clearTimeout(God.playerNumTick);
        },
        callbackOpen: function(data){
            God.certificate.adminId = data.adminId || '';
            God.certificate.roomId = data.roomId || '';
            God.status = 2;


            var header ='<div>\
                            <h1>\
                            法官出题\
                            </h1>\
                        </div>\
                        <div>\
                            <span class="room">\
                            135房间\
                            </span>\
                        </div>\
                        <span class="replay">\
                        </span>',
                container = '<div class="top">\
								<span class="a">\
									<textarea id="comm" placeholder="输入平民的词"></textarea>\
								</span><span class="b">\
									<textarea id="idiot" placeholder="输入傻子的词"></textarea>\
								</span>\
							</div>\
							<div class="bottom">\
								<span class="start">\
									<label class="playerNum">0人已经加入了房间</label>\
									<label>开始游戏</label>\
								</span>\
							</div>',
                msg = '<div id="msg">\
                                <div class="title">135</div>\
                        <div class="todo">将此房间号告诉游戏者</div>\
                        <div class="btn">好</div>\
                        </div>'

                ;

            $('header').html(header).find('.room').text(data.roomId + '房间');

            $('.container').html(container).find('.a input').focus();

            $('.f-r-1').addClass('f-r-2').removeClass('f-r-1');
            $('.f-r-2').addClass('f-r-3').removeClass('f-r-2');


            if($('#msg').length > 0){
                $('#msg').show().find('.title').text(data.roomId);
            }
            else{
                $(msg).appendTo('#wrapper').find('.title').text(data.roomId);
            }

            stage.mask.hide();
        },
        callbackStartGame: function(data){
            God.status = data.status;
            God.getPlayers(God.callbackGetPlayers);
        },
        callbackEnd: function(){},
        callbackGetAmount: function(data){
            var num = data.playerAmount ? (data.playerAmount -1) : 0;
            $('.playerNum').text(num + '人已经加入了房间');
        },
        callbackRandom: function(data){
            $('#idiot').val(data.words[0] || '');
            $('#comm').val(data.words[1] || '');
        },
        init:function () {

            //我是法官.
            $(document).on('tap','.down .l',function(){
                stage.mask.show();
                God.open(God.callbackOpen);
            });

            //好
            $(document).on('tap','.btn',function(){
                $('#msg').hide();
                God.getAmount(God.callbackGetAmount);
            });

            //开始游戏.
            $(document).on('tap','.start',function(e){
                var orTipVal =  $('#comm').val(),
                    idiTip = $('#idiot').val()
                    ;

                if($(this).css('backgroundColor') == 'black'){
                    return;
                }

                if(orTipVal.length != idiTip.length){
                    alert('平民和傻子的词长需一致!');
                    return;
                }


                if(orTipVal.trim().length == 0 || idiTip.trim().length == 0){
                    alert('请填词!');
                    return;
                }

                if(!window.confirm('请确认所有玩家都已加入，否则可能丢失玩家')) return;

                God.role.peopleWord = orTipVal.trim();
                God.role.idiotWord = idiTip.trim();

                God.startGame(God.callbackStartGame);
            });

            //重新开始.
            $(document).on('tap','.replay',function(){
                window.location.reload();
            });
        }
    }


    //helper
    var stage = {
        init:function () {
            stage.reset();
            stage.hideAddrBar();
            stage.eyes();
            stage.help();
            stage.registerShake();
            stage.shake();
            stage.overlay();
        },
        //设置.
        set:function () {
            $wrapper.on('tap', '.set', function (e) {
                alert('We are striving for that!');
            });
        },
        //鬼眼
        eyes: function(){
            var mask = document.querySelector('.up span')
                switchTime = 800
                ;
            setTimeout(function(){
                if(mask.style.zIndex == -1){
                    mask.style.zIndex = 1;
                }
                else{
                    mask.style.zIndex = -1;
                }

                switchTime = (switchTime == 800 ? 1200: 800);

                setTimeout(arguments.callee,switchTime);
            },1000);
        },
        //摇晃.
        registerShake:function () {
            //shake 组件
            $.fn.shake = function (options) {
                var setting = {
                    sensitivity:15,
                    timer:200,
                    position:{x1:0, x2:0, y1:0, y2:0, z1:0, z2:0 },
                    action:{}
                };
                if (options) {
                    $.extend(setting, options);
                }
                ;
                var SHAKE = {

                    _timer:{
                    },
                    checkUA:function () {
                        if (typeof window.DeviceOrientationEvent != 'undefined') {
                            if (typeof window.DeviceMotionEvent != 'undefined') {
                                //window.onorientationchange = SD.unit.updateOrientation;
                                window.addEventListener('devicemotion', function (e) {
                                    SHAKE.get(e)
                                }, false);
                                SHAKE.start();
                                return true;
                            } else {
                                console.log("对不起您的设备不支持摇动");
                                return false;
                            }
                        } else {
                            console.log("对不起您的设备不支持摇动");
                            return false;
                        }
                    },
                    // 晃动时在 x y z 方向上的加速度
                    get:function (e) {
                        setting.position.x1 = e.accelerationIncludingGravity.x;
                        setting.position.y1 = e.accelerationIncludingGravity.y;
                        setting.position.z1 = e.accelerationIncludingGravity.z;
                    },
                    // 判断晃动是否满足敏感系数，满足的话更新 x2 y2 z2
                    isMeetSensitivity:function () {
                        var change = Math.abs(setting.position.x1 - setting.position.x2 + setting.position.y1 - setting.position.y2 + setting.position.z1 - setting.position.z2);
                        if (change > setting.sensitivity) {
                            //alert('Shake!');
                            setting.action();
                            //console.log(typeof(setting.action))
                        }
                        // 更新
                        setting.position.x2 = setting.position.x1;
                        setting.position.y2 = setting.position.y1;
                        setting.position.z2 = setting.position.z1;
                    },
                    start:function () {
                        SHAKE._timer = setInterval(function () {
                            SHAKE.isMeetSensitivity()
                        }, setting.timer);
                    },
                    stop:function () {
                        clearInterval(SHAKE._timer)
                    }
                };
                SHAKE.checkUA();
            }
        },

        shake:function () {
            $(window).shake({action:function () {

                //游戏中，禁止摇动。。。
                if($('.start').css('backgroundColor') == 'black'){
                    return;
                }

                if($('#comm').height() > 0){
                    God.randomPuzzle(God.callbackRandom);
                }
            }});
        },

        //滑动.
        slider:function () {

            $('.slider').slider({ margin:0, isPlay:false, lazy:'data-img'});

            var titleTable = {
                1:'开始游戏',
                2:'领卡片',
                3:'确认身份',
                4:'天黑闭眼',
                5:'依次阐述',
                6:'投票',
                7:'遗言',
                8:'游戏结束'
            }

            var $cbox =  $('#helper .container'),
                $ccaption = $('#helper .caption')
                ;

            //slider.
            $(document).on('slider', function (e, index) {

                $cbox.animate({opacity:0}, 500, 'ease-out', function () {
                    $cbox.html(JST['view/help-switcher']({index:index})).animate({
                        opacity:1
                    }, 600, 'ease-out')
                });

                $ccaption.animate({
                    translateX:'-300px'
                }, 500, 'ease-out', function () {
                    $ccaption.text(titleTable[index]).animate({
                        translateX:"0px"
                    }, 600, 'ease-out')
                })
            })
        },

        //隐藏地址栏.
        hideAddrBar: function() {

//            $(function(){
//                // Set a timeout...
//                setTimeout(function () {
//                    window.scrollTo(0, 0);
//                }, 100);
//            });

            $(document).ready(function(){
                // Set a timeout...
                setTimeout(function () {
                    window.scrollTo(0, -1);
                }, 100);
            });
        },

        //遮罩.
        overlay: function() {
            stage.mask =
            {
                show: function() {
                    var loading = $('.loading');

                    if(loading.hasClass('hide')){
                        loading.removeClass('hide');
                    }
                    else{
                        return;
                    }
                },
                hide: function() {
                    var loading = $('.loading');

                    if(!loading.hasClass('hide')){
                        loading.addClass('hide');
                    }
                    else{
                        return;
                    }
                }
            };
        },

        //reset
        reset: function(){
            $.fn.wait = function( callback, seconds){
                return window.setTimeout( callback, seconds * 1000 );
            }

            String.prototype.trim = function(){
                return this.replace(/^\s+|\s+$/g, '');
            }
        },

        getCookie:function (name) {
            var c_start,
                c_end
                ;
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(name + "=")
                if (c_start != -1) {
                    c_start = c_start + name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return document.cookie.substring(c_start, c_end);
                }
            }
            return ""
        },

        setCookie:function (key, val, expiredays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = key + "=" + escape(val) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
        },

        //帮助.
        help: function(){
            $(document).on('tap','.f-l',function(e){

                $wrapper.hide();

                //loading
                stage.mask.show();

                if($helper.children().length > 0){
                    $helper.show();
                }
                else{
                    $helper.html(JST['view/help-main']()).find('.container').height('170px');
                    $('#helper footer').height('160px');
                }

                stage.mask.hide();

                //推迟初始化的时间.
                stage.slider();

                //注册关闭事件.
                stage.close();
            });
        },

        close: function(){
            $helper.on('tap','.close',function(e){
                $helper.hide();
                $('#wrapper footer').height('90px');
                $('#wrapper .container').height('240px');
                $wrapper.show();
            });
        }
    }


    //玩家
    var gamer = {
        statusTick : null,
        amountTick : null,
        certificate:{
            inputRoomId: '',
            playerId:'',
            status:''
        },
        join: function(callback){
            $.ajax({
                type:'GET',
                url:Server.join,
                data:{
                    roomId:gamer.certificate.inputRoomId,
                    playerId:stage.getCookie('playerId')
                },
                dataType:'jsonp',
                success:function (data) {
                    //保存凭证
                    if (data && (typeof data.code == 'number')) {
                        callback(data);
                    }
                },
                TimeOut: 3000,
                error:function (xhr, type) {
                    if(type.indexof(CONST.TIME_OUT) > -1) {
                        throw Error(CONST.TIME_OUT);
                    }
                    else{
                        throw 'jsonP Ajax error!';
                    }
                }
            });
        },
        getPlayers:function(callback){
            //等待出题中...
            $.ajax({
                type: 'GET',
                url: Server.getAmount,
                data: {
                    roomId: gamer.certificate.inputRoomId,
                    playerId: gamer.certificate.playerId
                },
                dataType: 'jsonp',
                success: function(data){
                    if(data){
                        callback(data);
                    }
                },
                error: function(xhr, type){
                    throw Error(CONST.GET_PLAYERS_AJAX_ERROR);
                }
            });


            gamer.amountTick = setTimeout(arguments.callee,2000,callback);
        },
        getStatus: function(callback){
            //查看自己的状态.
            $.ajax({
                type:'GET',
                url:Server.getStatus,
                data:{
                    roomId: gamer.certificate.inputRoomId,
                    playerId: gamer.certificate.playerId
                },
                dataType:'jsonp',
                success:function (data) {
                    //保存凭证
                    if (data && data.status) {
                        callback(data);
                    }

                },
                error:function (xhr, type) {
                    window.clearTimeout(gamer.statusTick);
                    throw 'getStatus Ajax error!';

                    return;

                }
            });

            gamer.statusTick = setTimeout(arguments.callee, 2000,callback);
        },
        getPuzzle: function(callback){
            $.ajax({
                type:'GET',
                url:Server.getPuzzle,
                data:{
                    playerId: gamer.certificate.playerId
                },
                dataType:'jsonp',
                success:function (data) {
                    if(data && data.word){
                        callback(data);
                    }
                },
                error:function (xhr, type) {
                    window.clearTimeout(gamer.statusTick);
                    throw 'getPuzzle Ajax error!';
                }
            });
        },
        callbackGetPuzzle: function(data){
            var role = data.character,
                $paper = $('.paper')
                ;


            window.clearTimeout(gamer.statusTick);
            window.clearTimeout(gamer.amountTick);

            if(role == ROLE.ONI){
                $paper.addClass('oni').find('label').text(data.word);
            }
            else if(role== ROLE.PEOPLE){
                $paper.addClass('common').find('label').text(data.word);
            }
            else if(role == ROLE.IDIOT){
                $paper.addClass('common').find('label').text(data.word);
            }
            else{
                throw Error(CONST.GET_PUZZLE_ROLE_ERROR);
            }

            $('header h1').text('游戏开始');

        },
        callbackGetStatus: function(data){
            if(data.status == STATUS.IDLE){
                alert('你已经和大家失去了联系!');
                window.clearTimeout(gamer.statusTick);
                return;
            }
            if(data.status == STATUS.GAME){
                gamer.getPuzzle(gamer.callbackGetPuzzle);
            }
        },
        callbackJoin: function(data){

            if(data.code == 0){
                gamer.certificate.playerId = data.playerId;
                stage.setCookie('playerId',data.playerId);

                var header = '<div>\
                                    <h1>\
                                    等待出题\
                                    </h1>\
                                </div>\
                                <div>\
                                    <span class="room">\
                                    135房间\
                                    </span>\
                                </div>\
                                <span class="replay">\
                                </span>',
                    box = '<div id="" class="box">\
                                <span class="arrow"></span>\
                                <span class="clip">\
                                    <span class="paper"><label>出题中</label></span>\
                                </span>\
                            </div>\
                            <div class="roomStatus">\
                            </div>'
                    ;

                $('header').html(header).find('.room').text(gamer.certificate.inputRoomId + '房间');
                $('.container').html(box);
                $('.f-r-1').addClass('f-r-2').removeClass('f-r-1');


                //box touch animation.
                TouchMove.init();

                //启动2个循环.
                gamer.getPlayers(gamer.callbackGetPlayers);
                gamer.getStatus(gamer.callbackGetStatus);
            }
            else{
                alert(TipInfo[data.reason]);
            }

            stage.mask.hide();
        },
        callbackGetPlayers: function(data){
            var num = data.playerAmount ? (data.playerAmount -1) : 0;
            $('.roomStatus').text(num + '人已经加入了房间');
        },
        init: function(){

            //我是玩家.
            $(document).on('tap','.down .r',function(){
                var popup ='<div id="popup">\
                                <div class="grp">\
                                    <input id="roomId" type="tel" placeholder="请输入房间号">\
                                    <button id="join">完成</button>\
                                </div>\
                            </div>'
                    ;

                var $popup = $('#popup')
                                ;

                if($popup.length > 0){
                    $popup.show().wait(function(){
                        $('#roomId').focus();
                    },1000);
                }
                else{
                    $(popup).appendTo('body').wait(function(){
                        $('#roomId').focus();
                    },1000);
                }

                //重新开始.
                $(document).on('tap','header .replay',function(){
                    window.clearTimeout(gamer.statusTick);
                    window.clearTimeout(gamer.amountTick);

                    window.location.reload();
                });
            });

            //完成.
            $(document).on('tap','#join',function(){

                $(this).focus();
                gamer.certificate.inputRoomId = $('#roomId').val();
                $('#popup').hide();
                stage.mask.show();
                gamer.join(gamer.callbackJoin);
            });

            //完成空白区域.
            $(document).on('tap','#popup',function(e){
                if(e.target === this){
                    $(this).hide();
                }
            });
        }
    }


    var TouchMove = {
        gestureInfo : {
            originX: 0,
            originY: 0,
            offsetY: 0
        },
        targetInfo:{
            $box: null,
            $popup: null
        },
        init: function(){
            TouchMove.targetInfo.$box = $('.box')[0];
            TouchMove.targetInfo.$popup = $('.paper')[0];
            $(document).on('touchstart','.box',TouchMove.onTouchStart);
            $(document).on('touchmove','.box',TouchMove.onTouchMove);
            $(document).on('touchend','.box',TouchMove.onTouchEnd);

            document.ontouchstart = function(e){
                e.preventDefault();
            }
        },
        onTouchStart: function(e){
            TouchMove.gestureInfo.originX = e.touches[0].pageX;
            TouchMove.gestureInfo.originY = e.touches[0].pageY;
        },
        onTouchMove: function(e){
            var offsetY= (e.touches[0].pageY - TouchMove.gestureInfo.originY),
                _height = (parseInt(TouchMove.targetInfo.$popup.style.height.toString()) || 0) - offsetY,
                shiftY = -(_height - 18) -35
                ;

            TouchMove.gestureInfo.offsetY = offsetY;

            if(_height >=18 && _height <= 120){
                //TouchMove.targetInfo.$popup.style.height = _height + 'px';
                TouchMove.targetInfo.$popup.style.webkitTransform = 'translateY('+ shiftY + 'px)';
            }
        },
        onTouchEnd: function(e){
            TouchMove.gestureInfo.originX = 0;
            TouchMove.gestureInfo.originY = 0;

            if(TouchMove.gestureInfo.offsetY < 0){
                //TouchMove.targetInfo.$popup.style.height = '120px';
                TouchMove.targetInfo.$popup.style.webkitTransform = 'translateY(-137px)';
            }

            if(TouchMove.gestureInfo.offsetY > 0){
                //TouchMove.targetInfo.$popup.style.height = '18px';
                TouchMove.targetInfo.$popup.style.webkitTransform = 'translateY(-55px)';
            }
        }
    }

    God.init();
    stage.init();
    gamer.init();

})(Zepto, window);

