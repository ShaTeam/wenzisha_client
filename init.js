(function($,window){
    var $content = $('#content')
        ;

    localStorage.clear();

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
        $('#content').html(JST['view/setTopic']());
    });


    //设置.
    $content.on('tap','#set',function(e){
        alert('set');
    });


    //出题按钮.
    $content.on('tap','#setTopic',function(e){
        $('#content').html(JST['view/startGame']());
    });

    $content.on('tap','#startGame',function(e){
        this.style.display = 'none';
        $('.h-comm figure').text('游戏中');
    });

    //进入玩家页面.
    $content.on('tap','.btn',function(e){
        $('#content').html(JST['view/userGet']());
    });

    //玩家确认口令.
    $content.on('tap','#confirm',function(e){
        $('#content').html(JST['view/userWait']());
    });


})(Zepto,window);