$("ul").on("click", "li", function(){
    $(this).toggleClass("clicked");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        var todoItem = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoItem + "</li>");
    };
});

$("#plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})