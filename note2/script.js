$(document).ready(function () {

  fitContent();

  $("#auth").modal();

  $("#auth-button").click(function () {
    var client_id = "64a0b705-0799-4ae6-a8c3-2203dd6b38e5";
    var redirect_uri = "http://omarsilva.net/note2/";
    var scope = "office.onenote_update wl.signin";
    var req = "https://login.live.com/oauth20_authorize.srf?response_type=code&client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&scope=" + scope;

        $.ajax({
          type: 'POST',
          url: req
        });
  });

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
