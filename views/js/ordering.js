// envoi du full-name et du message

$("#submit").on("click", function (e) {
    e.preventDefault();
    var message = {
      title : $("#title").val(),
      firstName : $("#first").val(),
      lastName : $("#last").val(),
      date : $("#date").val(),
      time : $("#time").val(),
      place : $("#place").val(),
      food : $("#food").val(),
      city : $("#city").val(),
      text1 : "made a ordering for a food",
      text2 : "and to be delivered at",
      text3 : "on",
      text4 : "at"
    };
    if (message.firstName.trim().length !== 0 && message.lastName.trim().length !== 0 && message.date.trim().length !== 0 && message.time.trim().length !== 0 && message.title.trim().length !== 0 && message.place.trim().length !== 0) {
    socket.emit("ordering", message);
    console.log(message);
    }
  });


$(document).on("ready", function () {

    $( "#form1" ).on("click", function (event) {
      event.preventDefault();
  
        $.ajax({
            type: 'POST',
            url: '/ordering',
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
                     if (response.Success=="Your ordering is done, you can now pay.") {
                         document.getElementById("aaa").click();
                     };
                 },
                 error: () => {
                 }
             })
    });
  });