$(document).on("ready", function () {

    $( "#form1" ).on("click", function (event) {
      event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/userRegister',
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