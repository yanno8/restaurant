// envoi du full-name et du message

$("input[name=submit]").on("click", function (e) {
  e.preventDefault();
  var message = {
    title : $("#title").val(),
    firstName : $("#name1").val(),
    lastName : $("#name2").val(),
    date : $("#date").val(),
    time : $("#time").val(),
    text1 : "made a reservation for a table of",
    text2 : "on",
    text3 : "at",
    table : $("#table").val()
  };
  if (message.firstName.trim().length !== 0 && message.lastName.trim().length !== 0 && message.date.trim().length !== 0 && message.time.trim().length !== 0 && message.title.trim().length !== 0 && message.place.trim().length !== 0) {
  socket.emit("booking", message);
  console.log(message);
  }
})

$(document).on("ready", function () {

  $( "#form1" ).on("click", function (event) {
    event.preventDefault();

      $.ajax({
          type: 'POST',
          url: '/confirmation',
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
                   if (response.Success=="Your booking is done.") {
                       document.getElementById("aaa").click();
                   };
               },
               error: () => {
               }
           })
  });
});