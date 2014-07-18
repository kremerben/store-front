$(document).ready(function() {



var product1 = {
        'name': "Dude's Rug",
        'price': 339.99,
        'desc': "Hey! This is a private residence, man! Yeah man. Well, you know, the Dude abides. Hardly Dude, a new 'vette? The kid's still got, oh, 96 to 97 thousand, depending on the options. The Dude abides.",
        'featured': true,
        'product_type': "product",
        'id': '00001',
        'discount': 15,
        'img': 'images/rug-1.jpg'
    };

var product2 = {
        'name': "A New Rug",
        'price': 249.99,
        'desc': "That, or Duder. His Dudeness. Or El Duderino, if you know, you're not into the whole brevity thing. We wanted to talk about little Larry. May we come in? DO YOU SEE WHAT HAPPENS, LARRY? They call Los Angeles the City of Angels. I didn't find it to be that exactly, but I'll allow as there are some nice folks there.",
        'featured': true,
        'product_type': "product",
        'id': '00002',
        'discount': 10,
        'img': 'images/rug-2.jpg'
    };

var product3 = {
        'name': "Another New Rug",
        'price': 289.99,
        'desc': "Forget it, Donny. You're out of your element. Our basic freedoms. This is quite a pad you got here, man. Completely unspoiled. What's a pederast, Walter? I just want to say, sir, that we're both enormous-on a personal level.",
        'featured': false,
        'product_type': "product",
        'id': '00003',
        'discount': 0,
        'img': 'images/rug-3.jpg'
    };

var product4 = {
        'name': "The White Russian",
        'price': 289.99,
        'desc': "I just want to say, sir, that we're both enormous-on a personal level.",
        'featured': false,
        'product_type': "product",
        'id': '00004',
        'discount': 0,
        'img': 'images/rug-4.jpg'
    };

var products  = [product1, product2, product3, product4];

function testrun() {
    for (var i = 0; i < products.length; i++) {
        console.log(products[i].name);

    }
}

//testrun();


//
//function buildProductHTML(e) {
//    html =
//}

//
//
//
//
$.each(products, function(index, product) {
    console.log(index, product.name);
    var productDiv = document.createElement("div");
    productDiv.id = product.id;
    $(productDiv).addClass('product');
    if (product.featured) {
        $(productDiv).addClass('featured');
    }
    $(productDiv).data({'name': product.name, 'price': product.price });
    productDiv.innerHTML = '<h1>Hi</h1> whats up';
    document.getElementById('products').appendChild(productDiv);








//    productDiv.appendTo('#products');
});

console.log('a' + )
//
//
//		<div class="product featured" id="box" data-name="Dude's Rug" data-price="339.99">
//            <img src='images/rug-1.jpg' class="productImage" />
//            <h1 class="productName">Dude's Rug</h1>
//            <h3 class="price">$339.99</h3>
//            <h3 class="quantity"></h3>
//            <button class="removeFromCart">Remove one from Cart</button>
//			<button class="add">Add to cart</button>
//			<button class="tellMore">Tell me more</button>
//			<div class="moreInfo">
//                <p>Hey! This is a private residence, man! Yeah man. Well, you know, the Dude abides. Hardly Dude, a new 'vette? The kid's still got, oh, 96 to 97 thousand, depending on the options. The Dude abides. Forget it, Donny. You're out of your element. Our basic freedoms. This is quite a pad you got here, man. Completely unspoiled. What's a pederast, Walter? I just want to say, sir, that we're both enormous-on a personal level.</p>
//			</div>
//		</div>










////    console.log(product);
//
////    productDiv.appendTo('#products').prop( id, (product.id));
//    $('#products').append(productDiv).prop(id, product.id);
////    productDiv.prop({
////        'class': product.product_type,
//        'id': product.id,
//        'data-name': product.name,
//        'data-price': product.price
//    });
//    if (product.featured) {
//        productDiv.addClass('featured');
//    }

//
//    $('');

//    var confirmYesButton = document.createElement('button');


//});


//        $(this).parent().clone().appendTo('#cart').prop({ id: (cartId)});


//    <div class="product featured" id="box" data-name="Dude's Rug" data-price="339.99">
//        <img src='images/rug-1.jpg' class="productImage" />
//        <h1 class="productName">Dude's Rug</h1>
//        <h3 class="price">$339.99</h3>
//        <h3 class="quantity"></h3>
//        <button class="removeFromCart">Remove one from Cart</button>
//        <button class="add">Add to cart</button>
//        <button class="tellMore">Tell me more</button>
//        <div class="moreInfo">
//            <p>Hey! This is a private residence, man! Yeah man. Well, you know, the Dude abides. Hardly Dude, a new 'vette? The kid's still got, oh, 96 to 97 thousand, depending on the options. The Dude abides. Forget it, Donny. You're out of your element. Our basic freedoms. This is quite a pad you got here, man. Completely unspoiled. What's a pederast, Walter? I just want to say, sir, that we're both enormous-on a personal level.</p>
//        </div>
//    </div>






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