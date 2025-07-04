var LMS_bg_custom;
window.onload = function theme() {

    //document.body.style.backgroundColor = "red";
    //localStorage.setItem("bgcolor", 1);
    var LMS_bg_custom = localStorage.getItem('LMS_bg_custom');
    var LMS_bg_custom_set = localStorage.getItem('LMS_bg_custom_set');
    var LMS_Box_Layout = localStorage.getItem('LMS_Box_Layout');    
    var LMS_bg_custom_Layouts = localStorage.getItem('LMS_bg_custom_Layouts');    
    if (LMS_bg_custom_set != "reset") {
        document.body.style.backgroundColor = LMS_bg_custom_set;
    } else if (LMS_bg_custom == "reset") {
        $("body").addClass("background-blue");
    } else {
        $("body").addClass(LMS_bg_custom);

        $("head").append('<link rel="stylesheet" class="layout-css" href="">');
      
console.log(LMS_bg_custom_Layouts);
    
        if (LMS_bg_custom == "background-red") {
        $(".layout-css").attr("href", "assets/css/styleRed.css");
        } else if (LMS_bg_custom == "background-purple") {
        $(".layout-css").attr("href", "assets/css/stylePurple.css");
        } else if (LMS_bg_custom == "background-info") {
            $(".layout-css").attr("href", "assets/css/styleInfo.css");
        } else if (LMS_bg_custom == "background-green") {
                $(".layout-css").attr("href", "assets/css/styleGreen.css");
        } else if (LMS_bg_custom == "background-dark") {
            $(".layout-css").attr("href", "assets/css/styledark.css");
        } else {
            $(".layout-css").attr("href", "");
        }
     
    }

    if (LMS_Box_Layout == "active") {
        $("body").addClass("container");
        $("body").addClass("box-layout");     

    }

    if (localStorage.getItem('LMS_bg_custom_Layouts') == "menu-light") {
        $(".layout-css").attr("href", "");
    } else if (localStorage.getItem('LMS_bg_custom_Layouts') == "menu-dark") {
        //$(".pcoded-navbar").removeClassPrefix("menu-");
        $(".pcoded-navbar").removeClass("menu-light");
        $(".pcoded-navbar").removeClass("navbar-dark");
    } else if (localStorage.getItem('LMS_bg_custom_Layouts') == "dark") {
        $("head").append('<link rel="stylesheet" class="layout-css" href="">');
        $(".pcoded-navbar").removeClass("menu-light");
        //$(".pcoded-navbar").removeClassPrefix("menu-");
        $(".pcoded-navbar").addClass("navbar-dark");
        
        if (LMS_bg_custom == "background-red") {
            $(".layout-css").attr("href", "assets/css/styleRed.css");
            $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          } else if (LMS_bg_custom == "background-purple") {
            $(".layout-css").attr("href", "assets/css/stylePurple.css");
            $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          } else if (LMS_bg_custom == "background-info") {
              $(".layout-css").attr("href", "assets/css/styleInfo.css");
              $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          } else if (LMS_bg_custom == "background-green") {
                  $(".layout-css").attr("href", "assets/css/styleGreen.css");
                  $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          } else if (LMS_bg_custom == "background-dark") {
              $(".layout-css").attr("href", "assets/css/styledark.css");
              $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          } else {
            //$(".layout-css").attr("href", "");
            //$("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
          }
        //$(".layout-css").attr("href", "assets/css/layout-dark.css");

    }

    

}


"use strict";
$(document).ready(function () {
    $("body").append(
        '<div id="styleSelector" class="menu-styler"><div class="style-toggler"><a href="#!"></a></div><div class="style-block"><h4 class="mb-2">Lean Management System <small class="font-weight-normal">Customizer</small></h4><hr class=""><div class="m-style-scroller"><h6 class="mt-2">Layouts</h6><div class="theme-color layout-type"><a href="#!" class="SaveBg " data-value="menu-light" title="Light"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="dark" title="Dark"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="reset" title="Reset">Reset</a></div><h6>background color</h6><div class="theme-color background-color flat"><a href="#!" class="SaveBg " data-value="background-blue"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-red"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-purple"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-info"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-green"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-dark"><span></span><span></span></a></div><h6>background Gradient</h6><div class="theme-color background-color gradient"><a href="#!" class="SaveBg" data-value="background-grd-blue"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-grd-red"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-grd-purple"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-grd-info"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-grd-green"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-grd-dark"><span></span><span></span></a></div><h6>background Image</h6><div class="theme-color background-color image"><a href="#!" class="SaveBg" data-value="background-img-1"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-img-2"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-img-3"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-img-4"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-img-5"><span></span><span></span></a><a href="#!" class="SaveBg" data-value="background-img-6"><span></span><span></span></a></div>    <h6>custom here</h6>   <input type="color" id="test" class="form-control " > <div class="form-group mb-2"><div class="switch switch-primary d-inline m-r-10"><input type="checkbox" id="box-layouts"><label for="box-layouts" class="cr"></label></div><label>Box Layouts</label></div></div><div class="row mt-1"><div class="col-12  text-muted text-center" style="font-size:10px;">Mattel Confidential Information – May Contain Trade Secrets – Do Not Distribute – ©2022 Mattel, Inc. All Rights Reserved.</div><div class="col-12  text-muted text-center mt-3"  style="font-size: 10px;">Created by <a href="https://www.linkedin.com/in/anan-nasep-670971207/" target="_blank">LSC System Support</a></div></div>'
    );
    setTimeout(function () {
        $(".m-style-scroller").css({
            height: "calc(100vh - 335px)",
            position: "relative",
        });
        var a = new PerfectScrollbar(".m-style-scroller", {
            wheelSpeed: 0.5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }, 400);
    $("#styleSelector > .style-toggler").on("click", function () {
        $("#styleSelector").toggleClass("open");
        $("#styleSelector").removeClass("prebuild-open");
    });
    //Layouts
    $(".layout-type > a").on("click", function () {
        var a = $(this).attr("data-value");
        localStorage.setItem('LMS_bg_custom_Layouts', a);
        localStorage.setItem('LMS_bg_custom', a);
        localStorage.setItem('LMS_bg_custom_set', a);
        $(".layout-type > a").removeClass("");
        $(".pcoded-navbar").removeClassPrefix("navbar-image-");
        $(this).addClass("");
        $("head").append('<link rel="stylesheet" class="layout-css" href="">');
        if (a == "menu-dark") {
            $(".pcoded-navbar").removeClassPrefix("menu-");
            $(".pcoded-navbar").removeClass("navbar-dark");
        }
        if (a == "menu-light") {
            $(".pcoded-navbar").removeClassPrefix("menu-");
            $(".pcoded-navbar").removeClass("navbar-dark");
            $(".pcoded-navbar").addClass(a);
        }
        if (a == "reset") {
            localStorage.setItem('LMS_Box_Layout', "reset");
            location.reload();
        }
        if (a == "dark") {
            $(".pcoded-navbar").removeClassPrefix("menu-");
            $(".pcoded-navbar").addClass("navbar-dark");
            $(".layout-css").attr("href", "assets/css/layout-dark.css");
        } else {
            $(".layout-css").attr("href", "");
        }
    });
    //background color
    $(".background-color.flat > a").on("click", function () {
        var a = $(this).attr("data-value");
        localStorage.setItem('LMS_bg_custom', a);
        localStorage.setItem('LMS_bg_custom_set', "reset");        
        
        $(".background-color > a").removeClass("");
        $(".pcoded-header").removeClassPrefix("brand-");
        $(this).addClass("");
        if (a == "background-default") {
            $(".pcoded-header").removeClassPrefix("header-");
            $("body").removeAttr("style");
            $("body").css("background-color", "");
        } else {
            $("body").removeAttr("style");
            $("body").css("background-color", "");
            $(".pcoded-header").removeClassPrefix("header-");
            $(".pcoded-header").addClass("header-" + a.slice(11, a.length));
            $("body").removeClassPrefix("background-");
            $("body").addClass("background-" + a.slice(11, a.length));
        }
        
        $("head").append('<link rel="stylesheet" class="layout-css" href="">');

        if (localStorage.getItem('LMS_bg_custom_Layouts') == "dark") {
            if (a == "background-red") {
                $(".layout-css").attr("href", "assets/css/styleRed.css");
                $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              } else if (a == "background-purple") {
                $(".layout-css").attr("href", "assets/css/stylePurple.css");
                $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              } else if (a == "background-info") {
                  $(".layout-css").attr("href", "assets/css/styleInfo.css");
                  $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              } else if (a == "background-green") {
                      $(".layout-css").attr("href", "assets/css/styleGreen.css");
                      $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              } else if (a == "background-dark") {
                  $(".layout-css").attr("href", "assets/css/styledark.css");
                  $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              } else {
                //$(".layout-css").attr("href", "");
                $("head").append('<link rel="stylesheet" class="layout-css" href="assets/css/layout-dark.css">');
              }
        } else{
            if (a == "background-red") {
                $(".layout-css").attr("href", "assets/css/styleRed.css");
              } else if (a == "background-purple") {
                $(".layout-css").attr("href", "assets/css/stylePurple.css");
              } else if (a == "background-info") {
                  $(".layout-css").attr("href", "assets/css/styleInfo.css");
              } else if (a == "background-green") {
                      $(".layout-css").attr("href", "assets/css/styleGreen.css");
              } else if (a == "background-dark") {
                  $(".layout-css").attr("href", "assets/css/styledark.css");
              } else {
                //$(".layout-css").attr("href", "");
              }
        }
       


    });
    //background gradient
    $(".background-color.gradient > a").on("click", function () {
        var a = $(this).attr("data-value");
        //localStorage.setItem('LMS_bg_custom', a);
        //localStorage.setItem('LMS_bg_custom_set', "reset");
        localStorage.setItem('LMS_bg_custom_set', a);
        $("body").removeAttr("style");
        $("body").css("background-color", "");
        $(".background-color > a").removeClass("");
        $(".pcoded-header").removeClassPrefix("brand-");
        $(this).addClass("");
        if (a == "background-default") {
        } else {

            $("body").removeClassPrefix("background-");
            $("body").addClass("background-" + a.slice(11, a.length));
        }
    });
    //background image
    $(".background-color.image > a").on("click", function () {
        var a = $(this).attr("data-value");
        //localStorage.setItem('LMS_bg_custom', a);
        //localStorage.setItem('LMS_bg_custom_set', "reset");
        localStorage.setItem('LMS_bg_custom_set', a);
        $("body").removeAttr("style");
        $("body").css("background-color", "");
        $(".background-color > a").removeClass("");
        $(".pcoded-header").removeClassPrefix("brand-");
        $(this).addClass("");
        if (a == "background-default") {
        } else {
            $("body").removeClassPrefix("background-");
            $("body").addClass("background-" + a.slice(11, a.length));
        }
    });
    $("#theme-rtl").change(function () {
        $("head").append('<link rel="stylesheet" class="rtl-css" href="">');
        if ($(this).is(":checked")) {
            $(".rtl-css").attr("href", "/Content/Backend_template/assets/css/layout-rtl.css");
        } else {
            $(".rtl-css").attr("href", "");
        }
    });
    $("#menu-fixed").change(function () {
        if ($(this).is(":checked")) {
            $(".pcoded-navbar").addClass("menupos-fixed");
            setTimeout(function () { }, 400);
        } else {
            $(".pcoded-navbar").removeClass("menupos-fixed");
        }
    });
    $("#header-fixed").change(function () {
        if ($(this).is(":checked")) {
            $(".pcoded-header").addClass("headerpos-fixed");
        } else {
            $(".pcoded-header").removeClass("headerpos-fixed");
        }
    });
    $("#breadcumb-layouts").change(function () {
        if ($(this).is(":checked")) {
            $(".page-header").addClass("breadcumb-sticky");
        } else {
            $(".page-header").removeClass("breadcumb-sticky");
        }
    });
    $("#box-layouts").change(function () {
        if ($(this).is(":checked")) {
            $("body").addClass("container");
            $("body").addClass("box-layout");
            localStorage.setItem('LMS_Box_Layout', "active");
        } else {
            $("body").removeClass("container");
            $("body").removeClass("box-layout");
            localStorage.setItem('LMS_Box_Layout', "reset");
        }
    });

    $("#test").change(function () {
        let colorpicker = document.getElementById('test');

        setInterval(() => {
            let color = colorpicker.value;
            document.body.style.backgroundColor = color;
            $("body").removeClassPrefix("background-");
        }, 200);

        var selectedColor = $(this).val();
        console.log(selectedColor);
        //$("body").removeClassPrefix("background-");
        $("#colorDisplay").css("background", selectedColor);
        localStorage.setItem('LMS_bg_custom_set', selectedColor);

    });

    $("#saveColor").on("click", function () {
        location.reload()
    });

    $.fn.removeClassPrefix = function (a) {
        this.each(function (c, d) {
            var b = d.className.split(" ").map(function (e) {
                return e.indexOf(a) === 0 ? "" : e;
            });
            d.className = b.join(" ");
        });
        return this;
    };
});

