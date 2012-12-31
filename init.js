(function ($, window) {
    var $content = $('#wrapper'),
        $container = $('#container'),
        $wheader = $content.find('header'),
        $wbox = $content.find('.box')
        ;

    var Server = {
        'open' : 'http://10.13.125.68:88/room/open?callback=?',
        'join' : 'http://10.13.125.68:88/room/join',
        'get-players' : 'http://10.13.125.68:88/room/get-players',
        'get-amount' : 'http://10.13.125.68:88/room/get-amount',
        'get-status' : 'http://10.13.125.68:88/room/get-status',
        'set-status' : 'http://10.13.125.68:88/room/set-status',
        'random-puzzle' : 'http://10.13.125.68:88/room/random-puzzle',
        'start-game' : 'http://10.13.125.68:88/room/start-game',
        'end-game' : 'http://10.13.125.68:88/room/end-game'
    }

    //神
    var God = {
        certificate: {
            adminId: "",
            roomId: -1,
            startTimestamp: -1,
            endTimestamp: -1
        },
        init:function () {
            God.getApple();
            God.setTopic();
            God.flip();
            God.wordNumAutoComplete();
            God.action();
        },

        //翻转隐藏（平民、傻子、鬼）
        flip: function(){
            var $item,
                $span,
                isVisible = false
                ;
            $content.on('tap','.god li',function(e){
                $item = $(this);
                $span = $item.find('span');
                isVisible = $span.css('visibility');

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
            });
        },
        //填词.
        wordNumAutoComplete: function(){
            $content.on('change','.putin input',function(e){
                $('#ghostTip').val(this.value.toString().length);
            });
        },
        //法官出题.
        getApple:function () {

            var header = '<figure class="caption">出题卡</figure>\
                            <div class="set">\
                          </div>';

            $content.on('tap', '.pen', function (e) {

                $.ajaxJSONP({
                    type: 'GET',
                    url: Server.open,
                    data: {},
                    dataType: 'json',
                    success: function(data){
                        //保存凭证
                        if(data && (data.code == 0)){
                            God.certificate.adminId = data.adminId;
                            God.certificate.roomId = data.roomId;
                            God.certificate.startTimestamp = data.startTimestamp;
                            God.certificate.endTimestamp = data.endTimestamp;

                            $('#roomId').val('取卡口令:' + data.roomId);
                        }
                    },
                    error: function(xhr, type){
                        alert('Ajax error!')
                    }
                });

                $wheader.html(header);
                $wbox.removeClass('box-start').addClass('box-ready').html(JST['view/s-1']());
            });


        },
        //出题.
        setTopic:function () {
            $content.on('tap', '#setTopic', function (e) {

                if($('#orTip').val().length != $('#idiTip').val().length){
                    alert('平民和傻子的词长需一致!')
                }

                $('header figure').text('确认人数');
                $wbox.removeClass('box-ready').addClass('box-game').html(JST['view/s-2']());
            });
        },
        //开始游戏.
        action:function () {
            $content.on('tap', '#startGame', function (e) {
                $('header figure').text('游戏中');
                this.style.backgroundColor = 'green';
                this.innerText = '游戏已开始';
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
                                alert("对不起您的设备不支持摇动");
                                return false;
                            }
                        } else {
                            alert("对不起您的设备不支持摇动");
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

                alert(1)
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
                    window.scrollTo(0, -100);
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
        init:function () {
            gamer.getApple();
            gamer.userTouch();
            gamer.waiting();
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
                $wbox.html(JST['view/w-2']());
            });
        }
    }

    gamer.init();

})(Zepto, window);

