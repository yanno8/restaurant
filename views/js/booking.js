 // envoi du full-name et du message

$(".submit").on("click", function (e) {
  e.preventDefault();
  var message = {
    fullName : $("#name").val(),
    text : "made a reservation for a table in your restaurant for",
    // place : $(".table-number>strong").html(number)
  };
  $("#name").val("");
  if (pseudo.username.trim().length !== 0) {
  socket.emit("chat-message", message);
  // console.log(message);
  }
});

/*socket.on('char-message', function (message) {
  console.log(message);
});*/   

$(document).ready(function() {
  var number = 1;
  $(".table-number>strong").html(number);
});

$(".table.plus").on("click",function(){
  number = $(".table-number>strong").text();
  number = parseInt(number) + 1;
  $(".table-number>strong").html(number);
})

$(".table.minus").on("click",function(){
  number = $(".table-number>strong").text();
  number = parseInt(number) - 1;
  /* if(number == 2){
      $(".table.minus").css("button:disabled");
  } */
  if(number >= 1){
      $(".table-number>strong").html(number);
  }
})

