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

});


$(document).on('click', '.removeFromCart', function() {
    var cartTotal = $("#cartTotal").data('cartTotal') || 0;
    var addCount = $(this).siblings('.quantity').data('addCount') || 0;
    var itemPrice = $(this).parent('div').data('price');
    addCount -= 1;
    cartTotal -= itemPrice;
    if (addCount < 1) {
        $(this).parent('div').remove();
//        $(this).parent().clone().appendTo('#cart').prop({ id: (cartId)});
//        $('#cart').find('#'+cartId).find('.removeFromCart').show();
    }
    $(this).siblings('.quantity').data('addCount', addCount);
    $(this).siblings('.quantity').text('Quantity: ' + addCount);

    $("#cartTotal").data('cartTotal', cartTotal);
    $("#cartTotal").text('$' + cartTotal.toFixed(2));

});



$('#checkout').on('click', function() {
    var cartTotal = $("#cartTotal").data('cartTotal') || 0;

   $('body').html('<h1 style="margin-top:200px;">Thank you for shopping!, your total is: $'+ cartTotal.toFixed(2));
});

$('product').on('hover', function() {})





});