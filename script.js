
      //function to add sent messages to history once Send button is clicked
      function submitItem(){
      var submittedItem = document.getElementById('toSend').value; //grab text in textbox
      const createElem = document.createElement("p"); //variable to contain text
      createElem.innerHTML = submittedItem; //add the typed text into text container 
      smsList.appendChild(createElem); //add the text "createElem" to the history box "smsList"
      }
      
      const smsList = document.getElementById("sms-list");




var engage_result1 = document.getElementById("overall_engagement").rows[2].cells.item(1).innerHTML;
var engage_result2 = document.getElementById("overall_engagement").rows[2].cells.item(2).innerHTML;
var engage_result3 = document.getElementById("overall_engagement").rows[2].cells.item(3).innerHTML;
var engage_result4 = document.getElementById("overall_engagement").rows[2].cells.item(4).innerHTML;
var engage_result5 = document.getElementById("overall_engagement").rows[2].cells.item(5).innerHTML;
var engage_result6 = document.getElementById("overall_engagement").rows[2].cells.item(6).innerHTML;
var engage_result7 = document.getElementById("overall_engagement").rows[2].cells.item(7).innerHTML;
var engage_result8 = document.getElementById("overall_engagement").rows[2].cells.item(8).innerHTML;
var engage_result9 = document.getElementById("overall_engagement").rows[2].cells.item(9).innerHTML;
var engage_result10 = document.getElementById("overall_engagement").rows[2].cells.item(10).innerHTML;
var engage_result11 = document.getElementById("overall_engagement").rows[2].cells.item(11).innerHTML;
var engage_result12 = document.getElementById("overall_engagement").rows[2].cells.item(12).innerHTML;
var engage_result13 = document.getElementById("overall_engagement").rows[2].cells.item(13).innerHTML;
var engage_result14 = document.getElementById("overall_engagement").rows[2].cells.item(14).innerHTML;

//week1 overall engagement
if (engage_result1 == "H") {
  greenDot();
} else if (engage_result1 == "L") {
  redDot();
}

function greenDot() {
  var x1 = document.getElementById("overall_engagement").rows[1].cells;
  x1[1].innerHTML = "🟢";
}

function redDot() {
  var x1 = document.getElementById("overall_engagement").rows[1].cells;
  x1[1].innerHTML = "🔴";
}



//week2 overall engagement
if (engage_result2 == "H") {
  greenDot2();
} else if (engage_result2 == "L") {
  redDot2();
}

function greenDot2() {
  var x2 = document.getElementById("overall_engagement").rows[1].cells;
  x2[2].innerHTML = "🟢";
}

function redDot2() {
  var x2 = document.getElementById("overall_engagement").rows[1].cells;
  x2[2].innerHTML = "🔴";
}



//week3 overall engagement
if (engage_result3 == "H") {
  greenDot3();
} else if (engage_result3 == "L") {
  redDot3();
}

function greenDot3() {
  var x3 = document.getElementById("overall_engagement").rows[1].cells;
  x3[3].innerHTML = "🟢";
}

function redDot3() {
  var x3 = document.getElementById("overall_engagement").rows[1].cells;
  x3[3].innerHTML = "🔴";
}

//week4 overall engagement
if (engage_result4 == "H") {
  greenDot4();
} else if (engage_result4 == "L") {
  redDot4();
}

function greenDot4() {
  var x4 = document.getElementById("overall_engagement").rows[1].cells;
  x4[4].innerHTML = "🟢";
}

function redDot4() {
  var x4 = document.getElementById("overall_engagement").rows[1].cells;
  x4[4].innerHTML = "🔴";
}


//week5 overall engagement
if (engage_result5 == "H") {
  greenDot5();
} else if (engage_result5 == "L") {
  redDot5();
}

function greenDot5() {
  var x5 = document.getElementById("overall_engagement").rows[1].cells;
  x5[5].innerHTML = "🟢";
}

function redDot5() {
  var x5 = document.getElementById("overall_engagement").rows[1].cells;
  x5[5].innerHTML = "🔴";
}

//week6 overall engagement
if (engage_result6 == "H") {
  greenDot6();
} else if (engage_result6 == "L") {
  redDot6();
}

function greenDot6() {
  var x6 = document.getElementById("overall_engagement").rows[1].cells;
  x6[6].innerHTML = "🟢";
}

function redDot6() {
  var x6 = document.getElementById("overall_engagement").rows[1].cells;
  x6[6].innerHTML = "🔴";
}


//week7 overall engagement
if (engage_result7 == "H") {
  greenDot7();
} else if (engage_result7 == "L") {
  redDot7();
}

function greenDot7() {
  var x7 = document.getElementById("overall_engagement").rows[1].cells;
  x7[7].innerHTML = "🟢";
}

function redDot7() {
  var x7 = document.getElementById("overall_engagement").rows[1].cells;
  x7[7].innerHTML = "🔴";
}


//week8 overall engagement
if (engage_result8 == "H") {
  greenDot8();
} else if (engage_result8 == "L") {
  redDot8();
}

function greenDot8() {
  var x8 = document.getElementById("overall_engagement").rows[1].cells;
  x8[8].innerHTML = "🟢";
}

function redDot8() {
  var x8 = document.getElementById("overall_engagement").rows[1].cells;
  x8[8].innerHTML = "🔴";
}


//week9 overall engagement
if (engage_result9 == "H") {
  greenDot9();
} else if (engage_result9 == "L") {
  redDot9();
}

function greenDot9() {
  var x9 = document.getElementById("overall_engagement").rows[1].cells;
  x9[9].innerHTML = "🟢";
}

function redDot9() {
  var x9 = document.getElementById("overall_engagement").rows[1].cells;
  x9[9].innerHTML = "🔴";
}


//week10 overall engagement
if (engage_result10 == "H") {
  greenDot10();
} else if (engage_result10 == "L") {
  redDot6();
}

function greenDot10() {
  var x10 = document.getElementById("overall_engagement").rows[1].cells;
  x10[10].innerHTML = "🟢";
}

function redDot10() {
  var x10 = document.getElementById("overall_engagement").rows[1].cells;
  x10[10].innerHTML = "🔴";
}



//week11 overall engagement
if (engage_result11 == "H") {
  greenDot11();
} else if (engage_result11 == "L") {
  redDot11();
}

function greenDot11() {
  var x11 = document.getElementById("overall_engagement").rows[1].cells;
  x11[11].innerHTML = "🟢";
}

function redDot11() {
  var x11 = document.getElementById("overall_engagement").rows[1].cells;
  x11[11].innerHTML = "🔴";
}


//week12 overall engagement
if (engage_result12 == "H") {
  greenDot12();
} else if (engage_result12 == "L") {
  redDot12();
}

function greenDot12() {
  var x12 = document.getElementById("overall_engagement").rows[1].cells;
  x12[12].innerHTML = "🟢";
}

function redDot12() {
  var x12 = document.getElementById("overall_engagement").rows[1].cells;
  x12[12].innerHTML = "🔴";
}


//week13 overall engagement
if (engage_result11 == "H") {
  greenDot13();
} else if (engage_result13 == "L") {
  redDot13();
}

function greenDot13() {
  var x13 = document.getElementById("overall_engagement").rows[1].cells;
  x13[13].innerHTML = "🟢";
}

function redDot13() {
  var x13 = document.getElementById("overall_engagement").rows[1].cells;
  x13[13].innerHTML = "🔴";
}


//week14 overall engagement
if (engage_result14 == "H") {
  greenDot14();
} else if (engage_result14 == "L") {
  redDot14();
}

function greenDot14() {
  var x14 = document.getElementById("overall_engagement").rows[1].cells;
  x14[14].innerHTML = "🟢";
}

function redDot14() {
  var x14 = document.getElementById("overall_engagement").rows[1].cells;
  x14[14].innerHTML = "🔴";
}

// function myFunction1() {
//   var x = document.getElementById("overall_engagement").rows[2].cells;
//   x[3].innerHTML = "NEW CONTENT";
// }