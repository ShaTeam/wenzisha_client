(function($,window,Hammer){

    localStorage.clear();

    $('.slider').slider({ margin: 5, isPlay: false, lazy : 'data-img'});

    $('.face').on('touchstart',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.card').removeClass('hide');
    });

    $('.face').on('touchend',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.card').addClass('hide');
    });

    //出题.
    $('.pen').on('tap',function(e){


        $('header').removeClass('.h-tall').addClass('h-comm')
    });

    $('#set').on('tap',function(e){
        alert('set');
    });

    $('.btn').on('tap',function(e){
        alert('btn');
    });

})(Zepto,window,Hammer);