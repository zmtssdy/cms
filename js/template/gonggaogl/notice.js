$(function(){
    // $('.button-active').hover(function(){
    //         $(this).parents('.gggl-content').find('.active-on').show()  
    //         $(this).parents('.gggl-content').find('.active-off').hide()  
    //     },
    //     function (){
    //         $(this).parents('.gggl-content').find('.active-off').show()  
    //         $(this).parents('.gggl-content').find('.active-on').hide()  
    //     }
    // )
    $('.button-active').click(function(){
        var _text = $(this).parents('.gggl-content')
        if(_text.hasClass('close')){
            _text.addClass('open').removeClass('close')
        } else {
            _text.addClass('close').removeClass('open')
        }
    })
    $('.active-on').hover(function(){
        $(this).find('.title-bottom').toggleClass('title-hover')
    })
})