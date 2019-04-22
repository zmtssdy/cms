$(function() {
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage
            , layer = layui.layer;

        //总页数低于页码总数
        laypage.render({
            elem: 'fenye'
            , count: 50 //数据总数
            , theme: '#1E9FFF'
        });

        //弹窗
        $('.dbgl .content .toolBar ul .del').click(function() {
            layer.open({
            type: 1,
            title:'提示'
            ,area: ['380px', '260px']
            // ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
            // ,id: 'layerDemo'+type //防止重复弹出
            ,content: '确定删除/取消发布/等等此视频？'
            ,btn: ['确定','取消']
            ,btnAlign: 'c' //按钮居中
            // ,shade: 0 //不显示遮罩
            ,yes: function(){
            layer.closeAll();
            }
        });
        })
    })

    //第一列不进行排序(索引从0开始) 
    $.tablesorter.defaults.headers = {
        0: { sorter: false },
        1: { sorter: false },
        2: { sorter: false },
        3: { sorter: false },
        5: { sorter: false },
        6: { sorter: false },
    };
    $(".tablesorter").tablesorter();

    //实现全选反选
    $("#theadInp").on('click', function () {
        $("tbody input:checkbox").prop("checked", $(this).prop('checked'));
    })
    $("tbody input:checkbox").on('click', function () {
        //当选中的长度等于checkbox的长度的时候,就让控制全选反选的checkbox设置为选中,否则就为未选中
        if ($("tbody input:checkbox").length === $("tbody input:checked").length) {
            $("#theadInp").prop("checked", true);
        } else {
            $("#theadInp").prop("checked", false);
        }
    })

    //蒙层
    // $('.dbgl .content table tbody tr td img').click(function() {
    //     $('.dbgl-play').show();
    // })

    $('.dbgl .content table tbody tr').eq(0).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','180px');
    })

    $('.dbgl .content table tbody tr').eq(1).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','291px');
    })

    $('.dbgl .content table tbody tr').eq(2).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','419px');
    })

    $('.dbgl .content table tbody tr').eq(3).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','538px');
    })

    $('.dbgl .content table tbody tr').eq(4).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','656px');
    })

    $('.dbgl .content table tbody tr').eq(5).hover(function(el) {
        el.stopPropagation();
        $('.dbgl .content .toolBar').show();
        $('.dbgl .content .toolBar').css('top','773px');
    })

    $('.dbgl .content table tbody').mouseleave(function() {
        $('.dbgl .content .toolBar').hide();
    })

    // $('.dbgl .content table').mouseout(function() {
    //     alert(1111)
    //     $('.plgl .content .toolBar').css('display','none');
    // })

})