$(document).ready(function() {


$('.tellMore').on('click',  function() {
    $(this).siblings('.moreInfo').toggle();
    $(this).text(function(i, text){
          return text === "Tell me more" ? "See Less" : "Tell me more";
      });
});


$('.add').on('click', function() {
    var quantityId = $(this).parent('div').attr('id');
    var cartId = "cart_"+quantityId;
    var cartTotal = $("#cartTotal").data('cartTotal') || 0;
    var addCount = $('#cart').find('#'+cartId).find('.quantity').data('addCount') || 0;
    var itemPrice = $(this).parent('div').data('price');
    if (addCount < 1) {
        $(this).siblings('.moreInfo').hide();
        $(this).parent().clone().appendTo('#cart').prop({ id: (cartId)});
            }
    $('#cart').find('#'+cartId).find('.removeFromCart').show();
    addCount += 1;
//    $(this).siblings('.quantity').data('addCount', addCount);
//    $(this).siblings('.quantity').text('Quantity: ' + addCount);
    $(this).siblings('.quantity').show();
    $('#cart').find('#'+cartId).find('.quantity').data('addCount', addCount);
    $('#cart').find('#'+cartId).find('.quantity').text('Quantity: ' + addCount);

    cartTotal += itemPrice;

    $("#cartTotal").data('cartTotal', cartTotal);
    $("#cartTotal").text('$' + cartTotal.toFixed(2));
    if (cartTotal > 0) {
        $('#cartImage').show();
        $('#cartImageText').show();
    }

});


$(document).on('click', '.removeFromCart', function() {
    var cartTotalEl = $("#cartTotal")
    var quantityEl = $(this).siblings('.quantity')
    var cartTotal = cartTotalEl.data('cartTotal') || 0;
    var addCount = quantityEl.data('addCount') || 0;
    var itemPrice = $(this).parent('div').data('price');
    addCount -= 1;
    cartTotal -= itemPrice;
    if (addCount < 1) {
        $(this).parent('div').remove();
//        $(this).parent().clone().appendTo('#cart').prop({ id: (cartId)});
//        $('#cart').find('#'+cartId).find('.removeFromCart').show();
    }
    quantityEl.data('addCount', addCount);
    quantityEl.text('Quantity: ' + addCount);

    cartTotalEl.data('cartTotal', cartTotal);
    cartTotalEl.text('$' + cartTotal.toFixed(2));

    $("#cartTotal").data('cartTotal', cartTotal);
    if (cartTotal < 1) {
        $('#cartImage').hide();
        $('#cartImageText').hide();
    }

});



$('#checkout').on('click', function() {
//    var confirmPage = document.createElement('div');
//    confirmPage.id = 'confirmPage';
    var cartTotal = $("#cartTotal").data('cartTotal') || 0;

    var confirmYesButton = document.createElement('button');
    var confirmNoButton = document.createElement('button');
    confirmYesButton.textContent = 'Confirm Purchase';
    confirmYesButton.id = 'confirm';
    confirmNoButton.textContent = 'Cancel Purchase';
    confirmNoButton.id = 'cancel';

   document.getElementById('overlay').innerHTML = '<h1 id="c" style="margin-top:50px;text-align:center;">Thank you for shopping!, ' +
       'your total is: $'+ cartTotal.toFixed(2) + '<br><br>' +
   '<img src="http://gifs.gifbin.com/280sw007883.gif" width="500px" />';
    $('#overlay').show('slow');
//    document.getElementById('overlay').appendChild(confirmPage);
    document.getElementById('overlay').appendChild(confirmNoButton);
    document.getElementById('overlay').appendChild(confirmYesButton);
});



$(document).on('click', '#cancel', function() {
    $('#overlay').hide('slow');
});




//$('product').on('hover', function() {});


$('div.featured').find('.price').append(function() {
    var price = $(this).parent().data('price');
    price *= 0.9;
    $(this).data('price', price);
    return '<div class="new-price">New Price: $'+ price.toFixed(2) + '</div>';
});



function toggleRotate() {
    $("#left_pin").toggleClass("rotate");
    $("#right_pin").toggleClass("neg_rotate");
}

setInterval(toggleRotate, 500);



});