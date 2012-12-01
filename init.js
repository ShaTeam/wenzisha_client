(function($,window,Hammer){

    //window.Notification.simple("hello");

    localStorage.clear();

//    var $stripUl = $('.strip ul'),
//        tb = ["0px","-270px","-540px","-810px","-980px","-1250px"],
//        cIndex = 0
//        ;
//
//    var hammer = new Hammer(document.querySelector('#tips'));
//
//    hammer.onswipe = function(ex){
//        if(ex.direction == 'right'){
//            (cIndex >= 1) ? cIndex-- : '';
//            $stripUl.animate(
//                { marginLeft: tb[cIndex] },
//                .3,
//                'ease-in-out',
//                function(){
//
//                }
//            )
//        }
//        else{
//            (cIndex < 4) ? cIndex++ : '';
//            $stripUl.animate(
//                { marginLeft: tb[cIndex] },
//                .3,
//                'ease-in-out',
//                function(){
//
//                }
//            )
//        }
//
//        ex.stopPropagation();
//
//    }
//
//    hammer.ontap = function(ex){
//        alert("tap");
//    }

    $('.slider').slider({ margin: 5, isPlay: false, lazy : 'data-img'});



})(Zepto,window,Hammer);