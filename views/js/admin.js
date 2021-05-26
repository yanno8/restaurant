$(document).on("ready", function () {

    $( "#form" ).on("click", function (event) {
      event.preventDefault();
  
      $.ajax({
        type: 'POST',
        url: '/admin',
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
                   document.getElementById("aaaa").click();
                 };
               },
               error: () => {
               }
             })
    });
  
  });