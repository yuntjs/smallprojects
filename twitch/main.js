var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

$(document).ready(function(){
  var i = 0;
  channels.forEach(function(channel){
    $.ajax({
      type: "GET",
      url: "https://wind-bow.glitch.me/twitch-api/streams/"+channel+"?callback=?",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      beforeSend: function(){
      },
      complete: function(){
      },
      success: function (data, textStatus, jqXHR) {
        var logo, status,
        url = "https://www.twitch.tv/"+channel;

        if(data.stream != null){
          logo = data.stream.channel.logo;
          status = data.stream.channel.status;
        } else {
          logo = "https://pbs.twimg.com/profile_images/2260555298/N_A_Facebook_blk_400x400.jpg";
          status = "offline";
        }

        $('div.list').append("<div id='"+channel+"' class='item'><img class='logo' src='"+logo+"'><a class='name text' target='_blank' href='"+url+"'>"+channel+"</a><span class='status text'>"+status+"</span></div>");
        if(status == "offline"){
          $('div#' + channel).addClass('offline');
        } else {
          $('div#' + channel).addClass('online');
        }
      },
      error: function (errorMessage) {
      }
    });
  });

  $('.status-link').on('click', function(){
    $('.status-link').removeClass('active');
    $(this).addClass('active');
    var id = this.id;
    if(id == 'online'){
      $('div.offline').hide();
      $('div.online').show();
    } else if(id == 'offline'){
      $('div.online').hide();
      $('div.offline').show();
    } else {
      $('div.online').show();
      $('div.offline').show();
    }
  })


})
