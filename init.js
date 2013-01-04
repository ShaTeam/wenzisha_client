(function ($, window) {
    var $content = $('#wrapper'),
        $container = $('#container'),
        $wheader = $content.find('header'),
        $wbox = $content.find('.box')
        ;

    var HOST = 'http://192.168.1.110:88';

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


    //神
    var God = {
        certificate: {
            adminId: "",
            roomId: -1,
            startTimestamp: -1,
            endTimestamp: -1
        },
        role: {
            peopleWord: '',
            idiotWord: ''
        },
        playerNumTick: null,
        randomPuzzle: function(){
            $.ajaxJSONP({
                type: 'GET',
                url: Server.randomPuzzle,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId
                },
                dataType: 'json',
                success: function(data){
                    if(data && data.words){
                        $('#idiTip').val(data.words[0] || '走你');
                        $('#orTip').val(data.words[1] || '航母');
                        $('#ghostTip').val(data.words[0].length);
                    }
                },
                error: function(xhr, type){
                    throw 'randomPuzzle Ajax error!';
                }
            });
        },
        init:function () {

            $content.on('tap', '.pen', function(e){
                God.getApple.call(e);
            });
            $content.on('tap', '#setTopic', function(e){
                God.setTopic.call(e);
            });
            $content.on('tap','.god li',function(e){
                God.flip.call(e);
            });
            God.wordNumAutoComplete();
            $content.on('tap', '#startGame', function(e){
                God.action.call(e);
            });
        },
        /*
         0 - IDLE
         1 - OPEN
         2 - PUZZLE
         3 - GAME
         */
        refreshPlayers: function(status){

            //确认人数中...
            if(status == 2){
                $.ajaxJSONP({
                    type: 'GET',
                    url: Server.getPlayers,
                    data: {
                        roomId: God.certificate.roomId,
                        adminId: God.certificate.adminId
                    },
                    dataType: 'json',
                    success: function(data){
                        if(data){
                            $('.word strong').text(
                                data.playerList.filter(function(item){

                                    /*0 - UNKOWN
                                     1 - GOD
                                     2 - PEOPLE
                                     3 - ONI
                                     4 - IDIOT
                                     */
                                    return item.character == 2 ||
                                        item.character == 3  ||
                                        item.character == 4
                                }).length
                            );
                        }
                    },
                    error: function(xhr, type){
                        throw 'God setTopic Ajax error!';
                    }
                });


                God.playerNumTick = setTimeout(arguments.callee,2000,2);
            }

            //游戏中..
            if(status == 3) {
                $.ajaxJSONP({
                    type: 'GET',
                    url: Server.getPlayers,
                    data: {
                        roomId: God.certificate.roomId,
                        adminId: God.certificate.adminId
                    },
                    dataType: 'json',
                    success: function(data){
                        if(data && data.playerList){
                            var peopleNum = 0,
                                idiotNum = 0,
                                oniNum = 0,
                                $status = $('.word p'),
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
                                          <strong>'+ oniNum + '</strong>个鬼<br>\
                                            全部人请确认身份'
                                ;

                            $status.html(tipSnap);
                        }
                    },
                    error: function(xhr, type){
                        throw 'God setTopic Ajax error!';
                    }
                });
            }
        },
        //翻转隐藏（平民、傻子、鬼）
        flip: function(tag,e){
            var $item = $('.god li'),
                $span  = $item.find('span'),
                isVisible = $span.css('visibility')
                ;


            if(isVisible.indexOf('visible') > -1){
                $item.animate({
                    rotate3d:'0, 1, 0, 180deg'
                },200,'ease-in',function(){
                    $span.css('visibility','hidden');
                });
            }
            else if(isVisible.indexOf('hidden') > -1){
                $item.animate({
                    rotate3d:'0, 1, 0, 0deg'
                },200,'ease-in',function(){
                    $span.css('visibility','visible');
                });
            }
            else{
                alert('hello');
            }

        },
        //填词.
        wordNumAutoComplete: function(){
            $content.on('change','.putin textarea',function(e){
                $('#ghostTip').val(this.value.toString().length);
            });
        },
        //法官.
        getApple:function () {

            var header = '<figure class="caption">出题卡</figure>\
                            <div class="set">\
                          </div>';

            $.ajaxJSONP({
                type: 'GET',
                url: Server.open,
                data: {},
                dataType: 'json',
                context: $('body'),
                success: function(data){
                    //保存凭证
                    if(data && (typeof data.code == 'number') && (data.code == 0)){
                        God.certificate.adminId = data.adminId;
                        God.certificate.roomId = data.roomId;
                        God.certificate.startTimestamp = data.startTimestamp;
                        God.certificate.endTimestamp = data.endTimestamp;

                        $('#roomId').val('取卡口令:' + data.roomId);
                    }
                },
                error: function(xhr, type){
                    throw 'open Ajax error!';
                }
            });

            $wheader.html(header);
            $wbox.removeClass('box-start').removeClass('box-game').addClass('box-ready').html(JST['view/s-1']());
        },
        //出题.
        setTopic:function () {
            var orTipVal =  $('#orTip').val(),
                idiTip = $('#idiTip').val()
                ;

            if(orTipVal.length != idiTip.length){
                alert('平民和傻子的词长需一致!');
                return;
            }


            if(orTipVal.trim().length == 0 || idiTip.trim().length == 0){
                alert('请填词!');
                return;
            }

            if(!window.confirm('请确认所有玩家都已加入，否则可能丢失玩家')) return;

            God.role.peopleWord = $('#orTip').val().trim();
            God.role.idiotWord = $('#idiTip').val().trim();

            $.ajaxJSONP({
                type: 'GET',
                url: Server.setPuzzle,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId,
                    words:God.role.peopleWord + ',' + God.role.idiotWord
                },
                dataType: 'json',
                success: function(data){
                    if(data && (typeof data.code == 'number') && (data.code == 0)){
                        $('header figure').text('确认人数');
                        $wbox.removeClass('box-ready').addClass('box-game').html(JST['view/s-2']({
                            peopleWord: God.role.peopleWord,
                            idiotWord : God.role.idiotWord,
                            gamerNum: (data.characters.people.count>>>0) +
                                (data.characters.idiot.count>>>0) +
                                (data.characters.oni.count>>>0)
                        }));


                        //更新玩家人数.
                        God.refreshPlayers(2);
                    }
                },
                error: function(xhr, type){
                    throw 'God setTopic Ajax error!';
                }
            });
        },
        //开始游戏.
        action:function (e) {
            var $this = $('#startGame')
                ;

            //结束游戏.
            if($this.text().indexOf('重新游戏') > -1){
                $.ajaxJSONP({
                    type: 'GET',
                    url: Server.endGame,
                    data: {
                        roomId: God.certificate.roomId,
                        adminId: God.certificate.adminId
                    },
                    dataType: 'json',
                    success: function(result){
                        /*
                         0 - IDLE
                         1 - JOIN
                         2 - PUZZLE
                         3 - GAME
                         */

                        if(result.status == 0){
                              God.getApple();
                        }
                    },
                    error: function(xhr, type){
                        throw 'endGame Ajax error!';
                    }
                });

                return;
            }

            //游戏开始，不再轮询加入玩家的人数.
            window.clearTimeout(God.playerNumTick);
            God.playerNumTick = null;

            var $status = $('.word p');

            $('header figure').text('游戏中');
            $this.css('backgroundColor','#E43C3C').text('结束/重新游戏');
            $status.html();

            $.ajaxJSONP({
                type: 'GET',
                url: Server.startGame,
                data: {
                    roomId: God.certificate.roomId,
                    adminId: God.certificate.adminId,
                    words:God.role.peopleWord + ',' + God.role.idiotWord
                },
                dataType: 'json',
                success: function(data){
                    data && data.status && God.refreshPlayers(data.status);
                },
                error: function(xhr, type){
                    throw 'startGame Ajax error!';
                }
            });
        }
    }

    God.init();

    var stage = {
        init:function () {
            stage.set();
            stage.registerShake();
            stage.shake();
            stage.hideAddrBar();
            stage.help();
        },
        //设置.
        set:function () {
            $content.on('tap', '.set', function (e) {
                alert('We are striving for that!');
            });
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
                if($('#idiTip').length > 0){
                    God.randomPuzzle();
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

            var $cbox =  $container.find('.box'),
                $ccaption = $container.find('.caption');

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

            $(function(){
                // Set a timeout...
                setTimeout(function () {
                    window.scrollTo(0, -200);
                }, 100);
            });
        },


        //帮助.
        help: function(){
            $(document).on('tap','.help-man',function(e){

                $content.addClass('hide');

                $container.html(JST['view/help']()).removeClass('hide');

                //推迟初始化的时间.
                stage.slider();

                //注册关闭事件.
                stage.close();
            });
        },

        close: function(){
            $container.on('tap','.close',function(e){
                $container.addClass('hide');
                $content.removeClass('hide');
            });
        }
    }

    stage.init();

    var gamer = {
        statusTick : null,
        amountTick : null,
        init:function () {
            gamer.getApple();
            gamer.userTouch();
            gamer.waiting();
        },
        getAmount: function(roomId,playerId){

            //查看人数
            $.ajaxJSONP({
                type:'GET',
                url:Server.getAmount,
                data:{
                    roomId:roomId ,
                    playerId: playerId
                },
                dataType:'json',
                success:function (data) {
                    //保存凭证
                    if (data && (typeof data.code == 'number') && (data.code == 0)) {

                        $('.tip').text((+data.playerAmount - 1) + '人已经领取卡片');
                    }
                },
                error:function (xhr, type) {
                    throw 'jsonP Ajax error!';
                }
            });


            gamer.amountTick = setTimeout(arguments.callee, 2000,roomId,playerId);
        },
        getStatus: function(roomId,playerId){
            //查看自己的状态.
            $.ajaxJSONP({
                type:'GET',
                url:Server.getStatus,
                data:{
                    roomId: roomId,
                    playerId: playerId
                },
                dataType:'json',
                success:function (data) {
                    //保存凭证
                    if (data && data.status) {


                        /*
                         STATUS
                         0 - IDLE
                         1 - OPEN
                         2 - PUZZLE
                         3 - GAME
                         */
                        if(data.status == 0){
                            alert('你已经和大家失去了联系!');
                            window.clearTimeout(gamer.statusTick);
                            return;
                        }

                        if(data.status == 1){

                        }

                        if(data.status == 2){
                            $.ajaxJSONP({
                                type:'GET',
                                url:Server.getPuzzle,
                                data:{
                                    playerId: playerId
                                },
                                dataType:'json',
                                success:function (data) {
                                     if(data && data.word && data.character){
                                         $wbox.html(JST['view/w-2']({
                                             character: data.character,
                                             word: data.word,
                                             playerNum: undefined
                                         }));

                                         $('header figure').text('游戏中');

                                         window.clearTimeout(gamer.statusTick);
                                         throw 'getPuzzle result error!';

                                         return;
                                     }
                                },
                                error:function (xhr, type) {
                                    window.clearTimeout(gamer.statusTick);
                                    throw 'getPuzzle Ajax error!';

                                    return;
                                }
                            });
                        }

                        if(data.status == 3){

                        }
                    }

                },
                error:function (xhr, type) {
                    window.clearTimeout(gamer.statusTick);
                    throw 'getStatus Ajax error!';

                    return;

                }
            });

            gamer.statusTick = setTimeout(arguments.callee, 300,roomId,playerId);
        },
        getApple:function () {
            var header = '<figure class="caption">领卡片</figure>\
                            <div class="set">\
                          </div>';

            $content.on('tap', '#gamer', function (e) {
                $wheader.html(header);
                $wbox.removeClass('box-start').addClass('box-game').html(JST['view/w-1']());
            });
        },
        userTouch: function(){
            $content.on('touchstart', '.face', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.card').removeClass('hide');
            });

            $content.on('touchend', '.face', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.card').addClass('hide');
            });
        },
        waiting:function () {

            //玩家确认口令.
            $content.on('tap', '#confirm', function (e) {

                var roomId = $('.word input').val().trim();

                $.ajaxJSONP({
                    type:'GET',
                    url:Server.join,
                    data:{ roomId:roomId },
                    dataType:'json',
                    success:function (data) {

                        //保存凭证
                        if (data && (typeof data.code == 'number') && (data.code == 0)) {

                            $wbox.html(JST['view/w-2']({
                                character: -1,
                                playerNum: +data.playerAmount - 1
                            }));

                            gamer.getAmount(roomId, data.playerId);
                            gamer.getStatus(roomId, data.playerId);
                        }
                    },
                    TimeOut: 3000,
                    error:function (xhr, type) {
                        if(type.indexof('timeout') > -1) {
                            throw 'timeout';
                        }
                        else{
                            throw 'jsonP Ajax error!';
                        }
                    }
                });

                $(this).css('disabled','disabled');
            });
        }
    }

    gamer.init();

})(Zepto, window);

