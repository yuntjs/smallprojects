// $(document).ready(function(){
//   const NUMS = ['1','2','3','4','5','6','7','8','9','0','.'];
//   const OPERATORS = ['eql','div','mul','plu','min'];
//   var crntDisp = "";
//   var crntPrgs = "";
//   var calculated = false;
//   var beginning = true;
//   var newInput = true;
//
//   $('td').on('click',function(e){
//     var clickedBtn = $(this).attr('id');
//     var text = $(this).text();
//     var displayed = $('span.display-val').text();
//
//     if(clickedBtn == "ac"){
//       calculated = false;
//       beginning = true;
//       crntDisp = "";
//       crntPrgs = "";
//       $('span.display-val').html("0");
//       $('span.display-prog').html("0");
//     }
//
//     if(clickedBtn == "ce"){
//       crntDisp == "";
//       $('span.display-val').html("0");
//       if(calculated){
//         beginning = true;
//         crntPrgs = "";
//         $('span.display-prog').html("0");
//       }
//     }
//
//     if(NUMS.includes(clickedBtn)){
//
//       beginning = false;
//       if(clickedBtn == '.' && crntDisp.includes('.')){
//         doNothing();
//       } else if(clickedBtn == '0' && displayed == '0'){
//         doNothing();
//       } else if(calculated){
//         calculated = false;
//         beginning = false;
//         crntDisp = clickedBtn;
//         crntPrgs = "";
//         $('span.display-val').html(crntDisp);
//         $('span.display-prog').html("0");
//       } else if(!checkLast(crntPrgs,NUMS) && newInput){
//         crntDisp = clickedBtn;
//         newInput = false;
//         $('span.display-val').html(crntDisp);
//       } else {
//         crntDisp += clickedBtn
//         $('span.display-val').html(crntDisp);
//       }
//     }
//
//     if(OPERATORS.includes(clickedBtn)){
//       if(beginning){
//         doNothing();
//       } else if(clickedBtn == "eql"){
//         calculated = true;
//         crntPrgs += displayed;
//         crntDisp = eval(crntPrgs);
//         crntPrgs = crntDisp;
//         $('span.display-val').html(crntDisp);
//         $('span.display-prog').html(crntPrgs);
//       } else if(calculated){
//         calculated = false;
//         crntPrgs += text;
//         $('span.display-prog').html(crntPrgs);
//       } else {
//         crntPrgs += displayed + text;
//         $('span.display-prog').html(crntPrgs);
//       }
//     }
//
//
//   })
// });
//
// function doNothing(){
//   return false;
// }
//
// function checkLast(str, arr){
//   if(str == ""){
//     return true;
//   }
//   return arr.includes(str[str.length - 1]);
// }
