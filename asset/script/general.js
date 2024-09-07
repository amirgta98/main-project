console.log("script run")
var direction =  $("body");
const ScripCdn = $("#Script-Cdn")
const CssCdn = $("#Css-Cdn")

if(direction.hasClass("go-rtl")){
    direction.css("direction","rtl")

    ScripCdn.attr("scr","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    ScripCdn.attr("integrity","sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4")
    CssCdn.attr("scc","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css")
    CssCdn.attr("integrity","sha384-dpuaG1suU0eT09tx5plTaGMLBsfDLzUCCUXOY2j/LSvXYuG6Bqs43ALlhIqAJVRb")



}else if(direction.hasClass("go-ltr")){
    direction.css("direction","ltr")
    ScripCdn.attr("scr","https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
    ScripCdn.attr("integrity","sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz")
    CssCdn.attr("scc","https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css")
    CssCdn.attr("integrity","sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65")
}else{
    console.error("please add class go-ltr or go-rtl to body")
}

// numberic up down
$(".nud-container").each(function (indexInArray, valueOfElement) { 
    var plus = $(valueOfElement).find(".nud-plus");
    var number = $(valueOfElement).find(".nud-num h5");
    var mines = $(valueOfElement).find(".nud-mines");

    // افزودن event handler برای دکمه ی plus
    plus.on("click", function() {
        var currentNumber = parseInt(number.text());
        number.text(currentNumber + 1);
    });

    // افزودن event handler برای دکمه ی mines
    mines.on("click", function() {
        var currentNumber = parseInt(number.text());
        if (currentNumber > 1) {
            number.text(currentNumber - 1);
        }else{
            $(valueOfElement).closest(".I-prudact").addClass("d-none");
        }
    });
});
$(".I-prudact").each(function (indexInArray, valueOfElement){
    var itemopener =  $(valueOfElement).find(".product-list-items-text");
    var items = $(valueOfElement).find(".product-items");
    itemopener.click(function(){
        items.toggleClass("d-none");        
    })
})
$(".k-Btn").click(function(){
    $(".k-Btn").removeClass("pay-K-Btn-selected")
    $(this).addClass("pay-K-Btn-selected")
})

// open sub catgury 
$(".catgury-container").each(function (indexInArray, valueOfElement) { 
    var subOpener =  $(valueOfElement).find(".catgury-open-sub-cat")   
    var opened = false;    
    subOpener.click(function(){
        if(opened){
            $(this).removeClass("catgury-open-sub-cat-rotated")
            $(valueOfElement).find(".catgury-open-sub-cat-box").addClass("d-none")
            opened = false
        }
        else{
            $(".catgury-open-sub-cat").removeClass("catgury-open-sub-cat-rotated")
            $(".catgury-container .catgury-open-sub-cat-box").addClass("d-none")

            $(this).addClass("catgury-open-sub-cat-rotated")
            $(valueOfElement).find(".catgury-open-sub-cat-box").removeClass("d-none")
            opened = true;
        }


    })    
});
// collapse script
$(".collapse-containe").each(function (indexInArray, valueOfElement) {
    $(valueOfElement).find('.colapse-Btn-container button').on('click', function() {
        $(valueOfElement).find(".colapse-Btn-container button").removeClass("btn-style-selected")
        $(this).addClass("btn-style-selected")
        var target = $(this).attr('target');
        $(valueOfElement).find('.collapse-content').addClass('d-none'); // Hide all contents
        $(valueOfElement).find('#' + target).removeClass('d-none'); // Show the targeted content
    });
})

$(".collapse-content").each(function (indexInArray, valueOfElement) { 
    $(valueOfElement).find(".pos-address-opener").click(function(){
        $(valueOfElement).find(".pos-adressBoxcontainer").toggleClass("d-none")
    })
})
// pos product show
var windowSize = $(".us-product").outerHeight(); 
var productSize = $(".us-L-procudt").outerHeight();

 if(productSize>=windowSize){
    $(".us-R-procudt").removeClass("d-none")
    $(".us-product").addClass("us-product-lot")
    var productSize2 = $(".us-R-procudt").outerHeight()
    function scrollToBottom() {
        $('.us-product').animate({ scrollTop: $('.us-product')[0].scrollHeight }, 4000, scrollToTop);
    }

    function scrollToTop() {
        $('.us-product').animate({ scrollTop: 0 }, 4000, scrollToBottom);
    }

    scrollToBottom();
 }
//  nav space maker
// we have 2 way for make space of nav for end of screen
// first: if wa want put a extra space to end od div that parent dose not have flex style 

$(".nav-item").click(function(){
    $(".nav-item").removeClass("nav-item-Selected")
    $(this).addClass("nav-item-Selected")
}) 


function navigetionsize(nav,navSpaceMaker){
    var navigationHeight = $(nav).outerHeight();
    navigationHeight = navigationHeight*1.2;
    $(navSpaceMaker).outerHeight(navigationHeight)
}
navigetionsize(".pos-navigetion-container",".nav-space-maker")
navigetionsize(".checkoutBtn",".kiosk-space-maker")


// nav control
$('.pos-modal-container').on('click', function(event) {
    console.log(12)
    // اگر کلیک خارج از pos-modal باشد
    if (!$(event.target).closest('.pos-modal').length) {
        $(this).addClass('d-none');
        $(".nav-item").removeClass("nav-item-Selected")
        $('.nav-item[target="pos-home-page"]').addClass("nav-item-Selected")

    }
});
$(".nav-container .nav-item").each(function (indexInArray, valueOfElement) { 
    $(valueOfElement).click(function(){
        var NavbBtnTarget = $(this).attr("target")
        $("#"+NavbBtnTarget).removeClass("d-none")
        if(NavbBtnTarget =="pos-total-page"){
          $(".pos-product-unselected-container").removeClass("d-none")            
          $(".pos-product-selected-container").addClass("d-none")  
        }

        $("#"+NavbBtnTarget).removeClass("d-none")
        
    })
     
});
$(".pos-back-btn").click(function(){
    
    $(".pos-product-unselected-container").addClass("d-none")
    $(".pos-product-selected-container").removeClass("d-none")  
    $(".nav-item").removeClass("nav-item-Selected")
    $('.nav-item[target="pos-home-page"]').addClass("nav-item-Selected")         

})







