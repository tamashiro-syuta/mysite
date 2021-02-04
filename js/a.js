$(function(){
    /** jQueryの処理 */ 



    //ーーーーーーーーーーーーーprofileのアニメーションーーーーーーーーーーーーーーーー
    // $("#meme").on("click", function () {
    //     $("#me").animate({
    //         "marginRight": "100px"
    //     });
    // });


    //ーーーーーーーーーーーーーーーーーーーーーーー　P　A　G　E　2　ーーーーーーーーーーーーーーーーーーーーーーーーーー
    var now = "#hobby1";
    var Slides = $(now + " " + ".slides");  // page2の写真の切り替え に使う
    var Slide = $(now).find(".sub-slide");
    var slideIndex = $(".sub-slide").index($(".sub-active"));
    //console.log(Slides);

    //ーーーーーーーーーーーーーーpage-2のコンテンツの切り替えーーーーーーーーーーーーー
    // 下のメソッドで使う処理
    var activeContents = $(".hobby-contents2").find(".active");  //アクティブがついてるコンテンツを変数に入れる
    $changeContents = function (newActive) {
        activeContents.removeClass("active");  //アクティブのついてるものからアクティブを抜く
        $(newActive).addClass("active");  //クリックした要素にアクティブを入れる
        activeContents = $(".hobby-contents2").find(".active");  //再定義
    }

    $("#hobby-nav").find("a").click(
        function () {
            //console.log(activeContents);
            if ($(this).hasClass("diy")) {
                now = "#hobby1";
                $changeContents(now);
                Slides = $(now).find(".slides"); //DIYが表示されたら、変数にDIYにあるslidesクラスを入れる
                Slide = $(now).find(".sub-slide");
                // console.log(Slides); //hobby1のslidesが入ってる
                // console.log(Slide); //hobby1のsub-slideが入ってる
                // console.log(slideIndex);
            } else if ($(this).hasClass("pet")) {
                now = "#hobby2";
                $changeContents(now);
                Slides = $(now).find(".slides");
                Slide = $(now).find(".sub-slide");
                // console.log(Slides);
                // console.log(Slide);
                // console.log(slideIndex);
            } else {
                now = "#hobby3";
                $changeContents("#hobby3");
                Slides = $("#hobby3").find(".slides");
                Slide = $("#hobby3").find(".sub-slide");
                slideIndex = $(".sub-slide").index($(".sub-active"));
                // console.log(Slides);
                // console.log(Slide);
                // console.log(slideIndex);
            }
           // console.log(now);
        }
    ); //---------------------------------------------------------------------

    //--------------------page2の写真の切り替え--------------------------------
    function toggleChangeBtn() {
        //console.log(now);
        slideIndex = $(now + " " + ".sub-slide").index($(".sub-active"));
        console.log($(now + " " + ".sub-slide"));
        // var slideIndexNumber = String(slideIndex).indexOf(".sub-active");
        // console.log(slideIndexNumber);
        console.log(Slide.length - 1);
        //console.log( $("#slides").find(".sub-slide"));
        $(".change-btn").show();
        if (slideIndex === 0) {
            $(".prev-btn").hide();
        } else if (slideIndex === Slide.length-1 ) {
            $(".next-btn").hide();
        }
    }

    $(".index-btn").click(function () {
        //console.log($(".slides"));
        Slides.find(".sub-active").removeClass("sub-active");
        console.log(Slides);
        var clickedIndex = $(now + " " + ".index-btn").index($(this));  //変数にクリックしたインデックスボタンの番号を代入
        Slides.find("li").eq(clickedIndex).addClass("sub-active");

        toggleChangeBtn();

    });

    $(".change-btn").click(function () {
        var $displaySlide = Slides.find(".sub-active");
        //console.log($displaySlide);
        $displaySlide.removeClass("sub-active");
        if ($(this).hasClass("next-btn")) {
            $displaySlide.next().addClass("sub-active");
        } else {
            $displaySlide.prev().addClass("sub-active");
        }
        toggleChangeBtn();
    });



    //ーーーーーーーーーーーーーーーーーコンタクトーーーーーーーーーーーーーーーーーーー
    
    $("#contact-btn").click(function() {
        //コンタクトをクリックしたら要素が左に移動
        // $("#contact2").removeClass("justify-content-center");
        // $("#contact2").addClass("justify-content-left");

        //フォームが表示される
        console.log($(".form"));

        
        if($(".form").hasClass('open')) { 
            $(".form").removeClass('open');
          // slideUpメソッドを用いて、$answerを隠してください
          $(".form").slideUp();
    
          // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
          //$(this).find("span").text("+");
          
        } else {
            $(".form").addClass('open'); 
          // slideDownメソッドを用いて、$answerを表示してください
          $(".form").slideDown();
          
          // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
          //$(this).find("span").text("-");
          
        }
    });

});