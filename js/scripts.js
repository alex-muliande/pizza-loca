
     function contact(form){
        var name = document.forms["form2"]["name"].value;
            var email = document.forms["form2"]["email"].value;
            var message = document.forms["form2"]["message"].value;
            alert("Hello! " + name + "," + " We have received your message. ");
              };


              $("input[name='delivery']").on("click", function(){
                $(".deladdress").toggle(this.value == "50" && this.checked);
             });
             
             var price = function(size,crust,toppings,quantity, deliver){
                return ((size + crust + toppings) * quantity) + deliver
                };
             
                var toppingsPrice = function checkTotal() {
                        document.orderform.total.value = '';
                        var sum = 0;
                        for (i=0;i<document.orderform.toppings.length;i++) {
                          if (document.orderform.toppings[i].checked) {
                              sum = sum + parseInt(document.orderform.toppings[i].value);
                          }
                        }
                        document.orderform.total.value = sum;
                    }
             
                function totalprice(form){
                var size = parseInt(document.forms["orderform"]["sizes"].value);
                if (size == "") {
                   alert("size must be filled out");
                   return false;
                 }
                var crust = parseInt(document.forms["orderform"]["crust"].value);
                if (crust == "") {
                   alert("Crust must be filled out");
                   return false;
                 }
                var toppings =   parseInt(document.getElementById("total").value);
                if (toppings == "") {
                   alert("Toppings must be filled out");
                   return false;
                 }
                var quantity = parseInt(document.forms["orderform"]["quantity"].value);
                if (quantity == "") {
                   alert("Quantity must be filled out");
                   return false;
                 }
                var deliver = parseInt(document.querySelector('input[name="delivery"]:checked').value);
                // if (deliver == "") {
                //     alert("Delivery option must be  selected")();
                //     return false;
                //   }
                 var result = price(size,crust,toppings,quantity, deliver);
                //  document.getElementById("output").innerHTML = result;
                 alert(result);
                }