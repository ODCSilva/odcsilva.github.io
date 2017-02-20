$(document).ready(function () {

  fitContent();

  function fitContent() {
    $("#content").css("top", $("#mainNav").css("height"));
    $("#content").outerHeight($(document).height() - $("#mainNav").outerHeight());
  }

  $("ul.nav > li > a").click(function () {
    $("ul.nav > li > a").removeClass("active");
    $(this).addClass("active");
  });

  $("#about_link").click(function () {
    $("#about").modal();
  });

  $('#navbarNav').on('hidden.bs.collapse', function () {
    debugger;
  });
});
