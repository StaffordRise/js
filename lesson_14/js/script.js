$(document).ready(function () {

$(document).ready(function(){
    $('.close').click(function(){
        close();
    });
    $('[href="#sheldure"]').click(function(){
        animateOn();
    });
    $('.main_btna').click(function(){
        animateOn();
    });
    $('.contact').click(function(){
        animateOn();
    });
    
    
});

$('.modal').top = '0%';
function animateOn(){
    $('.overlay').fadeIn(1700, function () {
        $('.overlay').show();
        $('.modal').show().animate({
            top: "10%",
            width: '50%',
            borderRadius: '15px',
            
        
        });
    });
}
function close(){
    $('.overlay').fadeOut(1200, function () {
    $('.overlay').hide();
    $('.modal').hide().animate({
        top: "0%",
        width: '50%',
        borderRadius: '0px',
        
    
    });
});
}

});