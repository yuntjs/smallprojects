const NUMS = ['1','2','3','4','5','6','7','8','9','0','.'];
const OPERATORS = ['=','/','*','+','-'];

$(document).ready(function(){
  var dispSel = $('span.display-val');
  var progSel = $('span.display-prog');
  var currentMain;
  var currentFormula;
  var temp;
  var beginning = true;
  var newInput = true;
  var calculated = false;

  function restartMain(){
    beginning = true;
    currentFormula = "0";
    progSel.html(currentFormula);
  }

  function restartFormula(){
    currentMain = "0";
    dispSel.html(currentMain);
  }

  function clearMain(){
    currentMain = "0";
  }

  function clearFormula(){
    currentFormula = "0";
  }

  function appendMain(input){
    currentMain += input;
  }

  function appendFormula(input){
    currentFormula += input;
  }

  function setMain(input){
    currentMain = input;
  }

  function setFormula(){
    currentFormula = currentMain;
  }

  function refreshMainView(){
    $('span.display-val').html(currentMain);
  }

  function refreshFormView(){
    $('span.display-prog').html(currentFormula);
  }

  restartMain();
  restartFormula();

  $('td').on('click',function(e){
    var clickedBtn = $(this).attr('id');
    var current = $('span.display-val').text();
    var text = $(this).text();

    switch(clickedBtn) {
      case 'ac':
        beginning = true;
        newInput = true;
        restartMain();
        restartFormula();
        break;

      case 'ce':
        if(temp){
          currentFormula = currentFormula.slice(0,currentFormula.length - temp.length);
          temp = "";
        }

        newInput = true;
        clearMain();
        refreshMainView();

        if(calculated){
          calculated = false;
          restartMain();
          restartFormula();
        }
        break;

      case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".": case "0":
        if(clickedBtn == '.' && currentMain.includes('.')){
          doNothing();
        } else if(beginning){
          beginning = false;
          newInput = false;
          calculated = false;
          setMain(clickedBtn);
          setFormula();
          refreshMainView();
        } else if(calculated){
          calculated = false;
          setMain(clickedBtn);
          setFormula();
          refreshMainView();
        } else if(!newInput && current == "0"){
          newInput = false;
          setMain(clickedBtn);
          appendFormula(clickedBtn);
          refreshMainView();
        } else if(newInput){
          calculated = false;
          newInput = false;
          temp = clickedBtn;
          setMain(clickedBtn);
          appendFormula(clickedBtn);
          refreshMainView();
        } else {
          calculated = false;
          temp += clickedBtn;
          appendMain(clickedBtn);
          appendFormula(clickedBtn);
          refreshMainView(currentMain);
        }
        break;

      case "=": case "*": case "-": case "+": case "/":
        if(beginning){
          doNothing();
        } else if(!checkLast(currentFormula, NUMS) && !calculated){
          doNothing();
        } else if(calculated){
          if(clickedBtn == "="){
            doNothing();
          } else {
            calculated = false;
            setMain(current);
            setFormula();
            appendFormula(clickedBtn);
            refreshMainView();
            refreshFormView();
          }
        } else if(clickedBtn == "="){
          newInput = true;
          calculated = true;
          temp = "";
          setMain(evaluateStr(currentFormula));
          setFormula();
          refreshMainView();
          refreshFormView();
        } else {
          newInput = true;
          appendFormula(clickedBtn);
          refreshFormView();
        }
        break;
    }
  })
})

function checkLast(str, arr){
  if(str == ""){return true}
  return arr.includes(str[str.length - 1]);
}

function evaluateStr(str){
  return eval(str);
}

function doNothing(){
  return false;
}
