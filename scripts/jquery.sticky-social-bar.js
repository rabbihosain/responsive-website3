var stickySocialBar = $('#sticky-social-icon');
var coverHeight = $('#cover-image').height();
dFlex = "d-flex";
dNone ="d-none";
$(window).scroll(function(){
    if($(window).scrollTop() > coverHeight){
        stickySocialBar.removeClass(dNone);
        stickySocialBar.addClass(dFlex);
    }
    else{
        stickySocialBar.removeClass(dFlex);
        stickySocialBar.addClass(dNone)
    }
})