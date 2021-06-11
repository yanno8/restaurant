$(document).on("ready", function () {

  $( "#form" ).on("click", function (event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/login',
      data: $('#form').serialize(),
      dataType: "json",
      success: (response) => {
        //alert("a");
        //console.log(response.Success);
        $('#form')[0].reset();

        document.getElementById("check").innerHTML=response.Success;
               //ADD THIS CODE
               setTimeout( () => {
                 document.getElementById("check").innerHTML="";
               },3000);
               if (response.Success=="Success!") {
                 document.getElementById("aa").click();
               };
             },
             error: () => {
             }
           })
  });

});

$("#submi").on("click", function (e) {
  e.preventDefault();
  var pseudo = {
    username = $("#n").val()
  };
  $("#n").val("");
  if (pseudo.username.trim().length !== 0) {
  socket.emit("full-name", pseudo)
  // console.log(pseudo);
  }
});