$(function () {
    $(".betMode").hover(function () {
            $(".collect", this).stop().animate({
                    bottom: "-100px"
                },
                {
                    queue: false,
                    duration: 150
                })
        },
        function () {
            $(".betMode", this).stop().animate({
                    bottom: "0px"
                },
                {
                    queue: false,
                    duration: 200
                })
        });
    $(".betMode").live('mouseover',
        function () {
            $(".collect", this).stop().animate({
                    bottom: "0px"
                },
                {
                    queue: false,
                    duration: 150
                })
        });
    $(".betMode").live('mouseout',
        function () {
            $(".collect", this).stop().animate({
                    bottom: "-100px"
                },
                {
                    queue: false,
                    duration: 120
                })
        });
});
/*收藏模式*/
function AddMode(modeId, lottery) {
    $.dialog.loading.show();
    $.post('/home/addmode', {
            "lottery": lottery,
            "betModeId": modeId
        }, function (result) {
            $.dialog.alert("温馨提示", result.message);
            $.dialog.loading.hide();
        }
        , 'json');
}

/*删除模式*/
function RemoveMode(modeId, lottery) {
    $.dialog.confirm('删除', '是否确认删除该模式？', function () {
        $.post('/home/removemode', {
                "lottery": lottery,
                "betModeId": modeId
            }, function (result) {
                if (result.success) {
                    self.location.reload(true);
                }
            }
            , 'json');
    });
}