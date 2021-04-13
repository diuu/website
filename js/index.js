
function changeDisplay(obj){
    var isBlock = $(obj).children("div").css('display');
    if (isBlock == 'block'){
        $(obj).children("div").css('display','none');

    }else{
        $(obj).children("div").css('display','block');
    }
}



//调用打印 输出物料编码

function getAllItems() {
    $.ajax({
        type: "get",
        url: "http://172.25.19.155:8090/report/getAllItems",
        dataType: "json",
        async: true,
        data:{
            orgId : 82,
        },
        success: function (result) {
            alert(111);
        }
    })
}
