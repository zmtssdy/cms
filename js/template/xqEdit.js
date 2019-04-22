$(function() {
    layui.use(['laypage', 'layer','laydate'], function () {
        var laypage = layui.laypage
            ,laydate = layui.laydate
            , layer = layui.layer;

            $('#search').click(function() {
                layer.open({
                type: 1,
                title:'精确查询'
                ,area: ['566px', '400px']
                // ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                // ,id: 'layerDemo'+type //防止重复弹出
                ,content: '<div class="jqcx">'+
                '<div>'+
                    '<label for="">开始时间</label>'+
                    '<input type="text" id="startTime" autocomplete="off" placeholder="请选择时间">'+
                    ''+
                '</div>'+
                '<div>'+
                    '<label for="">结束时间</label>'+
                    '<input type="text" id="endTime" autocomplete="off" placeholder="请选择时间">'+
                '</div>'+
                '<div>'+
                    '<label for="">生成时间</label>'+
                    '<input type="text" id="scTime" autocomplete="off" placeholder="请选择时间">'+
                '</div>'+
                '<div>'+
                    '<label for="">状态</label>'+
                    '<select name="" id=""><option value="">222</option></select>'+
                '</div>'+
            '</div>'
                ,btn: ['确定','取消']
                ,btnAlign: 'c' //按钮居中
                // ,shade: 0 //不显示遮罩
                ,yes: function(){
                layer.closeAll();
                }
            });
    
            //日期
            laydate.render({
                elem: '#startTime'
            });
    
            laydate.render({
                elem: '#endTime'
            });
    
            laydate.render({
                elem: '#scTime'
            });
            })
    })
})