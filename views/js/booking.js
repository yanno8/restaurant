// envoi du full-name et du message

$(".submit").on("click", function (e) {
  e.preventDefault();
  var message = {
    fullName : $("#name").val(),
    text : "made a reservation for a table in your restaurant for",
    place : $(".table-number>strong").text()
  };
  $("#name").val("");
  if (message.fullName.trim().length !== 0) {
  socket.emit("chat-message", message);
  console.log(message);
  }
});

/*socket.on('char-message', function (message) {
  console.log(message);
});*/   

$(document).on("ready", function () {

  $( "#form1" ).on("click", function (event) {
    event.preventDefault();

      $.ajax({
          type: 'POST',
          url: '/booking',
          data: $('#form1').serialize(),
          dataType: "json",
          success: (response) => {
              //alert("a"); 
              //console.log(response.Success);
              $('#form1')[0].reset();

              document.getElementById("check").innerHTML=response.Success;
                   //ADD THIS CODE
                   setTimeout( () => {
                       document.getElementById("check").innerHTML="";
                   },3000);
                   if (response.Success=="You are registered,You can login now.") {
                       document.getElementById("aaa").click();
                   };
               },
               error: () => {
               }
           })
  });
});