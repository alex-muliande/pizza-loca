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

function contact(form){
         var name = document.forms["form2"]["name"].value;
         var email2 = document.forms["form2"]["email"].value;
         var message2 = document.forms["form2"]["message"].value;
         alert("Hello! " + name + "," + " We have received your message. ");
            };
  








//