$(document).ready(function(){
  var chimes = $(".gong");
  var vids = $("iframe");
  var annotat = $(".info");

  for (var i = 0; i < chimes.length; i++){
    chimes[i].style.width = parseInt(120 - (i * 7)) + 'px';
    chimes[i].style.height = chimes[i].style.width;
    chimes[i].style.borderRadius = parseInt((120 - (i * 7)) / 2) + 'px';
  }

  chimes.on("click", function() {
    if (!$(this).hasClass('selected')){
      var i = chimes.index(this);
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      $(".mark").addClass("hidden");

      annotat.addClass("hidden");
      $(annotat[i]).removeClass("hidden");

      vids.addClass("hidden");
      if ($("#hideplayer").hasClass('playeroff')){
        $(".recent").removeClass("recent");
        $(vids[i]).addClass("recent");
      }
      else {
        $(vids[i]).removeClass("hidden");
      }

      if ($(this).hasClass("seattle")){
        $(".seatl").removeClass("hidden");
      }
      if ($(this).hasClass("toronto")){
        $(".toront").removeClass("hidden");
      }
      if ($(this).hasClass("sanfran")){
        $(".fran").removeClass("hidden");
      }
      if ($(this).hasClass("sandieg")){
        $(".dieg").removeClass("hidden");
      }
      if ($(this).hasClass("ny")){
        $(".nyork").removeClass("hidden");
      }
    }
  });

  $("#hideplayer").on("click", function() {
    if (!$(this).hasClass('playeroff')){
      $(this).addClass('playeroff');
      $("iframe").not(".hidden").addClass("recent");
      $("iframe").addClass('hidden');
      $("#player").height("0");
    }
    else{
      $(this).removeClass('playeroff');
      $("#player").height("315px");
      $("iframe.recent").removeClass("hidden recent");
    }
  });
});
