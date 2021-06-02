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

$('#submit').on('click', function (e) {
  e.preventDefault();
  var pseudo = {
    username = $('#name').val()
  };
  $('#name').val();
  socket.emit('full-name', pseudo)
  // console.log(pseudo);
  if (pseudo.username.trim().length !== 0) {
  }
});