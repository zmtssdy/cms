
var boxIdList = ['openClassBox', 'liveBox', 'easyFlowBox', 'openClassBox2', 'liveBox2', 'easyFlowBox2'];

function checkIsShowBox(value, id) {
    var $node = $('#' + id);
    if (value) {
        $node.show();
    } else {
        $node.hide();
    }
}
function lintenCheckbox(id) {
    var $node = $('#' + id);
    var boxId = $node.attr('data-for');
    $node.on('change', function(e) {
        checkIsShowBox(e.target.checked, boxId);
    })
}
$.each(boxIdList, function(i, id) {
    var $node = $('#' + id);
    if (!$node.length) {
        return;
    }
    var checkboxId = $node.attr('data-for');
    var checkValue = $('#' + checkboxId)[0].checked;
    checkIsShowBox(checkValue, id);
    lintenCheckbox(checkboxId);
})