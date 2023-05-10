$('.burger-menu').on("click", function() {
    $('.mobile-menu').toggleClass('slide-in');
    $('.overlay-layer').toggleClass('hidden');
});

$('.close').on("click", function() {
    $('.mobile-menu').toggleClass('slide-in');
    $('.overlay-layer').toggleClass('hidden');
});

let order = document.getElementById('order');
let orderCount = Number(order.value);

//reducing order
$('#minus').on('click',  function() {
    console.log("clicked");
    if(orderCount != 0) {
       orderCount--;
       order.value = orderCount;
    }
});

$('#plus').on('click', function() {
    console.log("clicked");
   orderCount++;
   order.value = orderCount;
});

$('.add-cart').on('click', function() {
    checking(orderCount);
})
function checking(x) {
    if(x > 0) {
        console.log('changed');
        $('.item-count').text(x);
    }else {
        $('.item-count').text("");
    }
}


$('.cart-img').on('click', function(){
    $('.cart-popup').toggleClass('appear');
    if(orderCount > 0) {
        $('.empty-cart').addClass('hidden');
        $('.cart-popup').append(`
        <div class="product flex px-2 mb-3">
            <img src="images/image-product-1-thumbnail.jpg" alt="" class="rounded-md product-img">
            <div>
                <p class="text-sm text-darkGrayishBlue">Fall Limited Edition Sneakers</p>
                <p><span class="text-sm text-darkGrayishBlue">$125.00 x 3 </span> <span class="text-sm font-bold">$375.00</span></p>
            </div>
            
            <div> <img src="images/icon-delete.svg" alt="" class="cursor-pointer"> </div>
        </div>
        `);
    }else {
        $('.empty-cart').removeClass('hidden');
    }
})


