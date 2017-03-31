sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
    $("#slider > img#1").fadeIn(300);
    startSlider();
});

count = $('#slider > img').length;

function startSlider(){

    loop = setInterval(function(){
        if(sliderNext > count){
            sliderNext = 1;
            sliderInt = 1;
        }

        $('#slider > img').fadeOut(300);
        $('#slider > img#' + sliderNext).fadeIn(300);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 3000);
}

function stopSlider(){
    window.clearInterval(loop);
}

$('#slider > img').on('mouseenter', stopSlider);
$('#slider > img').on('mouseleave', startSlider);

$('.prev').on('click', prevSlider);
$('.next').on('click', nextSlider);

function prevSlider(){
    id = sliderInt - 1;
    showSlider(id);
}

function nextSlider(){
    id = sliderInt + 1;
    showSlider(id);
}

function showSlider(id){
    stopSlider();
    if(id > count){
        id = 1;
    } else if (id < 1) {
        id = count;
    }

    $('#slider > img').fadeOut(300);
    $('#slider > img#' + id).fadeIn(300);

    sliderInt = id;
    sliderNext = id + 1;
}
