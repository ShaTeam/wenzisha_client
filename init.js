(function($,window){
    var $content = $('#wrapper')
        ;


//    alert(window.devicePixelRatio);
//    alert($(document).css('-webkit-min-device-pixel-ratio'));

    $('.slider').slider({ margin: 5, isPlay: false, lazy : 'data-img'});

    $content.on('touchstart','.face',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.card').removeClass('hide');
    });

    $content.on('touchend','.face',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.card').addClass('hide');
    });

    //法官出题.
    $content.on('tap','.pen',function(e){
        $('header').html(JST['view/headerTxt']({caption: '出题卡'}));
        $('.box').removeClass('box-start').addClass('box-ready').html(JST['view/setTopic']());
    });


    //设置.
    $content.on('tap','#set',function(e){
        alert('set');
    });


    //出题按钮.
    $content.on('tap','#setTopic',function(e){
        $('header figure').text('确认人数');
        $('.box').removeClass('box-ready').addClass('box-game').html(JST['view/startGame']());
    });

    $content.on('tap','#startGame',function(e){
        this.style.visibility = 'hidden';
        $('header figure').text('游戏中');
    });

    //进入玩家页面.
    $content.on('tap','.btn',function(e){
        $('#content').html(JST['view/userGet']());
    });

    //玩家确认口令.
    $content.on('tap','#confirm',function(e){
        $('#content').html(JST['view/userWait']());
    });

    //shake 组件  2011.05.04
    $.fn.shake = function(options){
        var setting = {
            sensitivity : 15,
            timer : 200,
            position : {x1 : 0 , x2 : 0 , y1 : 0 , y2 : 0 , z1 : 0 , z2 : 0 },
            action : {}
        };
        if(options){
            $.extend(setting, options);
        };
        var SHAKE = {

            _timer : {
            },
            checkUA : function(){
                if (typeof window.DeviceOrientationEvent != 'undefined') {
                    if (typeof window.DeviceMotionEvent != 'undefined'){
                        //window.onorientationchange = SD.unit.updateOrientation;
                        window.addEventListener('devicemotion', function(e){SHAKE.get(e)}, false);
                        SHAKE.start();
                        return true;
                    }else{
                        alert("对不起您的设备不支持摇动");
                        return false;
                    }
                }else{
                    alert("对不起您的设备不支持摇动");
                    return false;
                }
            },
            // 晃动时在 x y z 方向上的加速度
            get : function(e){
                setting.position.x1 = e.accelerationIncludingGravity.x;
                setting.position.y1 = e.accelerationIncludingGravity.y;
                setting.position.z1 = e.accelerationIncludingGravity.z;
            },
            // 判断晃动是否满足敏感系数，满足的话更新 x2 y2 z2
            isMeetSensitivity : function(){
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
            start : function(){
                SHAKE._timer = setInterval(function(){SHAKE.isMeetSensitivity()} , setting.timer);
            },
            stop : function(){
                clearInterval(SHAKE._timer)
            }
        };
        SHAKE.checkUA();
    }

    $(window).shake({action : function(){alert(1)}});
})(Zepto,window);