$(window).on('scroll', function(){
    if($(this).scrollTop() > 50){$('.checkbox:checked ~ .hamb_nav').fadeOut();
    }
    else{
        $('.checkbox:checked ~ .hamb_nav').fadeIn();
    }
})

$('#shop_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#shop').offset().top}, 1000);
})

$('#about_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 1000);
})

$('#team_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#team').offset().top}, 1000);
})

$('#buyer_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#buyer').offset().top}, 1000);
})

$('#category_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#category').offset().top}, 1000);
})

$('#shop_hamb').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#shop').offset().top}, 1000);
})

$('#about_hamb').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 1000);
})

$('#team_hamb').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#team').offset().top}, 1000);
})

$('#buyer_hamb').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#buyer').offset().top}, 1000);
})

$('#category_hamb').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#category').offset().top}, 1000);
})
