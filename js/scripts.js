$(document).ready(function(){
  $("form#formFactorial").submit(function(event) {
    debugger;
    var userNumber = parseInt($("input#userNumber").val());
    var product = 1;

    for (i = userNumber; i > 0; i--) {
      product = product * i;
      $("#userFactorial").append(i + " * ")
    }

    $("#userFactorial").show();
    $("#userFactorial").append(" = " + product);

    event.preventDefault();
  });
});
