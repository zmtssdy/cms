(function(){
    $('body').on('click', '.not-logged', function() {
        $('.login-infor').show();
    })

    $('body').on('click', '.login-close', function() {
        $('.login-infor').hide();
    })
})()