var btn_seg = $("#seg")
var btn_ter = $("#ter")

btn_seg.click(function(){
    $("#turmas").fadeOut("fast");
    $("#turma-seg").fadeIn(3000)
})

btn_ter.click(function(){
    $("#turmas").fadeOut("fast");
    $("#turma-ter").fadeIn(3000)
})