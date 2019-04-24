(function(){

    // 首页登录 显示隐藏
    $('body').on('click', '.not-logged', function() {
        $('.login-infor').show()
    })

    $('body').on('click', '.login-close', function() {
        $('.login-infor').hide()
    })

    // 页面头部双按钮 菜单切换
    $('body').on('click', '.top-title ul li', function() {
        $(this).addClass('active').siblings().removeClass('active')
        var text_ = $(this).text()
        if (text_ === "多媒体管理") {
            $('.common-nav2').hide();
            $('.common-nav1').show();
        } else {
            $('.common-nav1').hide();
            $('.common-nav2').show();
        }
    })
})()