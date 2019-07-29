//business logic
function Details(type, size, crust, toppings, quantity){
  this.selectedType = type;
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

function Total(price, quantity, delivery){
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function(){
  return this.price * this.quantity + this.delivery;
}



  //ui logic
$(document).ready(function(){
  $('#form2').submit(function(event){
    event.preventDefault();

    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliverPrices = [200, 0]
    var sizePrices = [600, 900, 1200];
    var inputtedType = $('#type').val();
    var inputtedCrust = $('#crusts').val();
    var inputtedTopping = $('#toppings').val();
    var inputtedSize = parseInt($('#size').val());
    var pizzaPrice = sizePrices[inputtedSize-1];
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = deliverPrices[selectedDeliver-1];

    var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
    var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
    var newBill = newTotal.finalTotal();


    alert("your order is " + newDetails.selectedType + ", " + newDetails.selectedToppings + ', and ' + newDetails.selectedCrust +". click ok to view your bill");
    alert(newBill +"");

    document.getElementById('form2').reset();

  });


});










// //business logic
// // function Details( size, crust, toppings, quantity){
// //   this.selectedSize = size;
// //   this.selectedCrust = crust;
// //   this.selectedToppings = toppings;
// //   this.selectedQuantity = quantity;
// // }

// // function Total(price, quantity, delivery){
// //   this.price = price;
// //   this.quantity = quantity;
// //   this.delivery = delivery;
// // }

// // Total.prototype.finalTotal = function(){
// //   return this.price * this.quantity + this.delivery;
// // }

// var totalPrice = function(){
//   return (inputtedSize + inputtedTopping + inputtedCrust * quantity) + deliveryPrice
// };

//   //ui logic
// $(document).ready(function(){
//   $('#form2').submit(function(event){
//     event.preventDefault();

//     // var selectedDeliver = parseInt($('#delivery-option').val());
//     // var deliverPrices = [200, 0]
//     // var Price = [1200, 900, 600];
//     // var toppings =[200,250,300,350];
//     // var crust=[250,350,450,450,400]
//     var inputtedCrust = $('#crusts').find(":selected").val();
//     var inputtedTopping = $('#toppings').find(":selected").val();
//     var inputtedSize = $('#size').find(":selected").val();
//     // var pizzaPrice = sizePrices[inputtedSize];
//     var inputtedQuantity = parseInt($('#quantity').val());
//     var deliveryPrice =$('#delivery-option').find(":selected").val();

//     var { newDetails, newBill } = newFunction(inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity, deliveryPrice);

//     var result = totalPrice();
//     alert(result);

//     alert("your order is "  + ", " + newDetails.selectedToppings + ', and ' + newDetails.selectedCrust +". click ok to view your bill");
//     alert(newBill +"");

//     document.getElementById('form2').reset();

//   });


// });


// function newFunction(inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity, deliveryPrice) {
//   var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
//   var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
//   var newBill = newTotal.finalTotal();
//   return { newDetails, newBill };
// }

// function contact(form){
//       var name = document.forms["form2"]["name"].value;
//       var email2 = document.forms["form2"]["email"].value;
//       var message2 = document.forms["form2"]["message"].value;
//       alert("Hello! " + name + "," + " We have received your message. ");
//         };

























































































          //   $("input[name='delivery']").on("click", function(){
          //     $(".deladdress").toggle(this.value == "50" && this.checked);
          //  });
             
          //  var price = function(size,crust,toppings,quantity, deliver){
          //     return ((size + crust + toppings) * quantity) + deliver
          //     };
             
          //     var toppingsPrice = function checkTotal() {
          //             document.orderform.total.value = '';
          //             var sum = 0;
          //             for (i=0;i<document.orderform.toppings.length;i++) {
          //               if (document.orderform.toppings[i].checked) {
          //                   sum = sum + parseInt(document.orderform.toppings[i].value);
          //               }
          //             }
          //             document.orderform.total.value = sum;
          //         }
             
          //     function totalprice(form){
          //     var size = parseInt(document.forms["orderform"]["sizes"].value);
          //     if (size == "") {
          //        alert("size must be filled out");
          //        return false;
          //      }
          //     var crust = parseInt(document.forms["orderform"]["crust"].value);
          //     if (crust == "") {
          //        alert("Crust must be filled out");
          //        return false;
          //      }
          //     var toppings =   parseInt(document.getElementById("total").value);
          //     if (toppings == "") {
          //        alert("Toppings must be filled out");
          //        return false;
          //      }
          //     var quantity = parseInt(document.forms["orderform"]["quantity"].value);
          //     if (quantity == "") {
          //        alert("Quantity must be filled out");
          //        return false;
          //      }
          //     var deliver = parseInt(document.querySelector('input[name="delivery"]:checked').value);
          //   if (deliver == "") {
          //       alert("Delivery option must be  selected")();
          //       return false;
          //     }
          //      var result = price(size,crust,toppings,quantity, deliver);
          //    document.getElementById("output").innerHTML = result;
          //      alert(result);
          //     }

                