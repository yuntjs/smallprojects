const NUMS = ['1','2','3','4','5','6','7','8','9','0','.'];
const OPERATORS = ['=','/','*','+','-'];

$(document).ready(function(){
  var dispSel = $('span.display-val');
  var progSel = $('span.display-prog');
  var crntDisp;
  var crntPrgs;
  var beginning = true;

  function restart(){
    crntPrgs = "0";
    progSel.html(crntPrgs);
  }

  function clear(){
    crntDisp = "0";
    dispSel.html(crntDisp);
  }

  function dispAppend(input){
    crntDisp += input;
  }

  function progAppend(input){
    crntPrgs += input;
  }

  function dispSet(input){
    crntDisp = input;
  }

  function progSet(){
    crntPrgs = crntDisp;
  }

  function setDispHtml(input){
    $('span.display-val').html(input);
  }

  function setProgHtml(input){
    $('span.display-prog').html(input);
  }

  restart();
  clear();

  $('td').on('click',function(e){
    var clickedBtn = $(this).attr('id');
    var current = $('span.display-val').text();
    var text = $(this).text();

    switch(clickedBtn) {
      case 'ac':
        restart();
        clear();
        break;

      case 'ce':
        clear();
        break;

      case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".": case "0":
        if(clickedBtn == '.' && crntDisp.includes('.')){
          doNothing();
        } else if(beginning){
          dispSet(clickedBtn);
          setDispHtml(crntDisp);
          beginning = false;
        } else {
          dispAppend(clickedBtn);
          setDispHtml(crntDisp);
        }
        break;

      case "=": case "*": case "-": case "+": case "/":

    }


  })
})

function evaluateStr(str){
  return eval(str);
}

function doNothing(){
  return false;
}
