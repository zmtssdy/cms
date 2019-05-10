(function () {

    // 首页登录 显示隐藏
    $('body').on('click', '.not-logged', function () {
        $('.login-infor').show()
    })

    $('body').on('click', '.login-close', function () {
        $('.login-infor').hide()
    })

    // 页面头部双按钮 菜单切换
    $('body').on('click', '.top-title ul li', function () {
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

    $(".common-nav1 .layui-nav-item").click(function () {
        $(this).siblings().removeClass('layui-nav-itemed');
        var index_ = $(this).index();
        $.cookie("index", index_, {
            expires: 7,
            path: '/'
        });
    })

    $('.common-nav1 .layui-nav-child dd').click(function(){
        $.cookie("indexName", $(this).index() || '0', {
            expires: 7,
            path: '/'
        });
    })
    var index_detail = $.cookie("index");

    $('.common-nav1 li').each(function (i, e) {
        if (index_detail == i) {
            if (!$('.top-index').hasClass('menu')) {
                $(e).addClass('layui-nav-itemed')
                if($.cookie('indexName')){
                    $(e).find('dd').eq($.cookie('indexName')).addClass('layui-nav-itemeds')
                    if(!$(e).find('dl').hasClass('layui-nav-child')){
                        $(e).addClass('layui-nav-itemeds')
                    }
                } else {
                    $(e).addClass('layui-nav-itemeds')
                }
            }
        }
    })


    $(".common-nav2 .layui-nav-item").click(function () {
        $(this).siblings().removeClass('layui-nav-itemeds');
        var index2_ = $(this).index();
        $.cookie("index2", index2_, {
            expires: 7,
            path: '/'
        });
    })
    var index_detail2 = $.cookie("index2")

    $('.common-nav2 li').each(function (i, e) {
        if (index_detail2 == i) {
            if (!$('.top-index').hasClass('menu')) {
                $(e).addClass('layui-nav-itemeds')       
            }
        }
    })

})()