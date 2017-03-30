$(document).ready(function(){
  var breakTime = 5;
  var sessionTime = 25;
  var startCounter = false;
  var isSession = true;
  var setTimer;

  function toSeconds(mins){
    return mins * 60;
  };

  function toMins(sec){
    return sec/60;
  }

  function setTime(mins){
    var seconds = toSeconds(mins);

    if(seconds/60 >= 1){
      mins = Math.floor(seconds/60);
      seconds = Math.round(((seconds/60) - mins)*60);

      if(seconds > 9) {
        return mins + ":" + seconds;
      } else {
        return mins + ":0" + seconds;
      }

    } else {

      if(seconds > 9){
        return seconds;
      } else {
        return "0:0" +seconds;
      }

    }
  }

  function doNothing(){
    return false;
  }

  function checkMin(seconds){
    return seconds > 1
  }

  function refreshBreak(){
    $('#timer-break').html(breakTime);
  }
  function refreshSession(){
    $('#timer-session').html(sessionTime);
  }

  function refreshTime(type){
    $('.current-timer').html(setTime(type));
  }

  function changeTitle(str){
    $('.current-title').html(str)
  }

  refreshBreak();
  refreshSession();
  refreshTime(sessionTime);


  $('.btn').on('click',function(){
    var action = $(this).text();
    var timerType = $(this).closest('div').find('.timer').attr('id')
    if(!startCounter){
      if(action == '+'){
        if(timerType == "timer-session"){
          sessionTime = Math.ceil(sessionTime + 1);
          refreshSession();
          refreshTime(sessionTime);
        } else {
          breakTime = Math.ceil(breakTime + 1);
          refreshBreak();
          refreshTime(breakTime);
        }
      } else {
        if(timerType == "timer-session"){
          checkMin(sessionTime) ? sessionTime = Math.floor(sessionTime - 1) : doNothing();
          refreshSession();
          refreshTime(sessionTime);
        } else {
          checkMin(breakTime) ? breakTime = Math.floor(breakTime - 1) : doNothing();
          refreshBreak();
          refreshTime(breakTime);
        }
      }
    }
  })

  $('section.timer').on('click',function(){
    startCounter = !startCounter;
    if(startCounter){
      $(this).addClass('hover');
      counterFunc();
      setTimer = setInterval(counterFunc,1000)
    } else {
      $(this).removeClass('hover');
      window.clearInterval(setTimer);
    }
  })

function counterFunc(){
  var seconds;

  if(sessionTime == 0){
    changeTitle("Break!");
    isSession = false;
  } else if(breakTime == 0){
    changeTitle("Session!")
    isSession = true;
  }


  if(startCounter){
    if(isSession){
      seconds = toSeconds(sessionTime);
      seconds = Math.floor(seconds - 1);
      sessionTime = toMins(seconds);
      refreshTime(sessionTime);
    } else {
      seconds = toSeconds(breakTime);
      seconds = Math.floor(seconds - 1);
      breakTime = toMins(seconds);
      refreshTime(breakTime);
    }
  }
}














})
