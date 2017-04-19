$(document).ready(function () {

    $(function () {
        $(document).click(function (e) {
            if ($(".ui-img-show").length || e.target.src) {
                $("#show").attr("src",e.target.src);
                $("#show").toggleClass("ui-img-show");
                $("#show").toggleClass("ui-img");
                $(".ui-element").toggleClass("");
            }
        });
    });


$(".box2-body").hide();
    $(".box2-body:eq(0)").fadeIn(300).siblings('.box2-body').fadeOut(100);
    $(".box2-top:eq(0)").css("background","#ccc").siblings('.box2-top').css("background","#fff");
    
    $(".box2-top").click(function() {
        var i = $(this).index();
        $(".box2-body:eq("+ i +")").fadeIn(300).siblings('.box2-body').fadeOut(100);
        $(".box2-top:eq("+ i +")").css("background","#ccc").siblings('.box2-nav').css("background","#fff");
    });


    var number = 3;
    $(".ui-box3-del").click(function () {
        var count = $(".ui-box3num").length;
        $(this).parent().remove();
        number--;
        for(var i = 0;i < count;i++)
            $(".ui-box3-num").eq(i).text(i + 1);
    })

    function renumber() {       
        $('.ui-box3-num').each(function(index, n) {
            $(n).text(index + 1);
        });
    }
    function addmain() {
        var main = $("<div></div>").addClass("ui-main");
        var num = $("<div></div>").addClass("ui-box3-num");
        var mid = $("<div></div>").addClass("ui-box3-mid");
        var del = $("<div></div>").addClass("ui-box3-del").text("delete");
        main.append(num);
        main.append(mid);
        main.append(del);
        $(".ui-box3-button").before(main);
        number++;
        renumber();
        del.click(function () {
            $(this).parent().remove();
            renumber();
        })
    }
    $(".ui-box3-button").click(function () {
        number++;
        addmain();
    })
});