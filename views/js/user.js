socket.on("user", function(pseudo) {
  $('.user-info').append(`<span class="user-name">
  <strong>${pseudo.username}</strong>
</span>
<span class="user-status">
  <i class="fa fa-circle"></i>
  <span id="online">Online</span>
</span>`);
});


$(".sidebar-dropdown > a").on("click", function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $("#close-sidebar").on("click", function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").on("click", function() {
    $(".page-wrapper").addClass("toggled");
  });
  
  