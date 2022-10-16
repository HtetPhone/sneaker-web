$(document).ready( function() {
    $('.menu').click( function() {
        console.log('clicked');
        $('.nav-box').animate({left: '0'});
    });
});


$('.close').click( function () {
        $('.nav-box').animate({left: '-1000px'});
        console.log('it clicked');
});

//increse n decrease
let current = document.getElementById('count-value');
console.log(current.innerHTML);
$('.plus').click( function() {
    let i = Number(current.innerText);
    i++;
});