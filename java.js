// Counter Plus Buttons
var button1 = document.getElementById("counterPlus1btn"),
    count = 0;
button1.onclick = function () {
    count += 1;
    document.getElementById("counterPlus1").innerHTML = count;
    let totalTests1 = count + count7;
    let totalPercentage1 = (count / totalTests1) * 100;
    document.getElementById("percentage1").innerHTML = "% Correct: " + totalPercentage1.toFixed(1) + "% : " + count +"/"+ totalTests1;
};
var button2 = document.getElementById("counterPlus2btn"),
    count1 = 0;
button2.onclick = function () {
    count1 += 1;
    document.getElementById("counterPlus2").innerHTML = count1;
    let totalTests2 = count1 + count8;
    let totalPercentage2 = (count1 / totalTests2) * 100;
    document.getElementById("percentage2").innerHTML = "% Correct: " + totalPercentage2.toFixed(1) + "% : " + count1 +"/"+ totalTests2;
};
var button3 = document.getElementById("counterPlus3btn"),
    count2 = 0;
button3.onclick = function () {
    count2 += 1;
    document.getElementById("counterPlus3").innerHTML = count2;
    let totalTests3 = count2 + count9;
    let totalPercentage3 = (count2 / totalTests3) * 100;
    document.getElementById("percentage3").innerHTML = "% Correct: " + totalPercentage3.toFixed(1) + "% : " + count2 +"/"+ totalTests3;
};
var button4 = document.getElementById("counterPlus4btn"),
    count3 = 0;
button4.onclick = function () {
    count3 += 1;
    document.getElementById("counterPlus4").innerHTML = count3;
    let totalTests4 = count3 + count10;
    let totalPercentage4 = (count3 / totalTests4) * 100;
    document.getElementById("percentage4").innerHTML = "% Correct: " + totalPercentage4.toFixed(1) + "% : " + count3 +"/"+ totalTests4;
};
var button5 = document.getElementById("counterPlus5btn"),
    count4 = 0;
button5.onclick = function () {
    count4 += 1;
    document.getElementById("counterPlus5").innerHTML = count4;
    let totalTests5 = count4 + count11;
    let totalPercentage5 = (count4 / totalTests5) * 100;
    document.getElementById("percentage5").innerHTML = "% Correct: " + totalPercentage5.toFixed(1) + "% : " + count4 +"/"+ totalTests5;
};
var button6 = document.getElementById("counterPlus6btn"),
    count5 = 0;
button6.onclick = function () {
    count5 += 1;
    document.getElementById("counterPlus6").innerHTML = count5;
    let totalTests6 = count5 + count12;
    let totalPercentage6 = (count5 / totalTests6) * 100;
    document.getElementById("percentage6").innerHTML = "% Correct: " + totalPercentage6.toFixed(1) + "% : " + count5 +"/"+ totalTests6;
};
var button7 = document.getElementById("counterPlus7btn"),
    count6 = 0;
button7.onclick = function () {
    count6 += 1;
    document.getElementById("counterPlus7").innerHTML = count6;
    let totalTests7 = count6 + count13;
    let totalPercentage7 = (count6 / totalTests7) * 100;
    document.getElementById("percentage7").innerHTML = "% Correct: " + totalPercentage7.toFixed(1) + "% : " + count6 +"/"+ totalTests7;
};
// Counter Minus Buttons
var button8 = document.getElementById("counterMinus1btn"),
    count7 = 0;
button8.onclick = function () {
    count7 += 1;
    document.getElementById("counterMinus1").innerHTML = count7;
    let totalTests1 = count + count7;
    let totalPercentage = (count / totalTests1) * 100;
    document.getElementById("percentage1").innerHTML = "% Correct: " + totalPercentage.toFixed(1) + "% : " + count +"/"+ totalTests1;
};
var button9 = document.getElementById("counterMinus2btn"),
    count8 = 0;
button9.onclick = function () {
    count8 += 1;
    document.getElementById("counterMinus2").innerHTML = count8;
    let totalTests2 = count1 + count8;
    let totalPercentage2 = (count1 / totalTests2) * 100;
    document.getElementById("percentage2").innerHTML = "% Correct: " + totalPercentage2.toFixed(1) + "% : " + count1 +"/"+ totalTests2;;
};
var button10 = document.getElementById("counterMinus3btn"),
    count9 = 0;
button10.onclick = function () {
    count9 += 1;
    document.getElementById("counterMinus3").innerHTML = count9;
    let totalTests3 = count2 + count9;
    let totalPercentage3 = (count2 / totalTests3) * 100;
    document.getElementById("percentage3").innerHTML = "% Correct: " + totalPercentage3.toFixed(1) + "% : " + count2 +"/"+ totalTests3;
};
var button11 = document.getElementById("counterMinus4btn"),
    count10 = 0;
button11.onclick = function () {
    count10 += 1;
    document.getElementById("counterMinus4").innerHTML = count10;
    let totalTests4 = count3 + count10;
    let totalPercentage4 = (count3 / totalTests4) * 100;
    document.getElementById("percentage4").innerHTML = "% Correct: " + totalPercentage4.toFixed(1) + "% : " + count3 +"/"+ totalTests4;
};
var button12 = document.getElementById("counterMinus5btn"),
    count11 = 0;
button12.onclick = function () {
    count11 += 1;
    document.getElementById("counterMinus5").innerHTML = count11;
    let totalTests5 = count4 + count11;
    let totalPercentage5 = (count4 / totalTests5) * 100;
    document.getElementById("percentage5").innerHTML = "% Correct: " + totalPercentage5.toFixed(1) + "% : " + count4 +"/"+ totalTests5;
};
var button13 = document.getElementById("counterMinus6btn"),
    count12 = 0;
button13.onclick = function () {
    count12 += 1;
    document.getElementById("counterMinus6").innerHTML = count12;
    let totalTests6 = count5 + count12;
    let totalPercentage6 = (count5 / totalTests6) * 100;
    document.getElementById("percentage6").innerHTML = "% Correct: " + totalPercentage6.toFixed(1) + "% : " + count5 +"/"+ totalTests6;
};
var button14 = document.getElementById("counterMinus7btn"),
    count13 = 0;
button14.onclick = function () {
    count13 += 1;
    document.getElementById("counterMinus7").innerHTML = count13;
    let totalTests7 = count6 + count13;
    let totalPercentage7 = (count6 / totalTests7) * 100;
    document.getElementById("percentage7").innerHTML = "% Correct: " + totalPercentage7.toFixed(1) + "% : " + count6 +"/"+ totalTests7;
};

// Remove 1 from Count plus buttons
var buttonRemove1 = document.getElementById("removeBtn1");
buttonRemove1.onclick = function () {
    if (count >= 1){
        count -= 1;
    }
    document.getElementById("counterPlus1").innerHTML = count;
    let totalTests1 = count + count7;
    let totalPercentage1 = (count / totalTests1) * 100;
    document.getElementById("percentage1").innerHTML = "% Correct: " + totalPercentage1.toFixed(1) + "% : " + count +"/"+ totalTests1;
};
var buttonRemove2 = document.getElementById("removeBtn3");
buttonRemove2.onclick = function () {
    if (count1 >= 1){
        count1 -= 1;
    }
    document.getElementById("counterPlus2").innerHTML = count1;
    let totalTests2 = count1 + count8;
    let totalPercentage2 = (count1 / totalTests2) * 100;
    document.getElementById("percentage2").innerHTML = "% Correct: " + totalPercentage2.toFixed(1) + "% : " + count1 +"/"+ totalTests2;
};
var buttonRemove3 = document.getElementById("removeBtn5");
buttonRemove3.onclick = function () {
    if (count2 >= 1){
        count2 -= 1;
    }
    document.getElementById("counterPlus3").innerHTML = count2;
    let totalTests3 = count2 + count9;
    let totalPercentage3 = (count2 / totalTests3) * 100;
    document.getElementById("percentage3").innerHTML = "% Correct: " + totalPercentage3.toFixed(1) + "% : " + count2 +"/"+ totalTests3;
};
var buttonRemove4 = document.getElementById("removeBtn7");
buttonRemove4.onclick = function () {
    if (count3 >= 1){
        count3 -= 1;
    }
    document.getElementById("counterPlus4").innerHTML = count2;
    let totalTests4 = count3 + count10;
    let totalPercentage4 = (count3 / totalTests4) * 100;
    document.getElementById("percentage4").innerHTML = "% Correct: " + totalPercentage4.toFixed(1) + "% : " + count3 +"/"+ totalTests4;
};
var buttonRemove5 = document.getElementById("removeBtn9");
buttonRemove5.onclick = function () {
    if (count4 >= 1){
        count4 -= 1;
    }
    document.getElementById("counterPlus5").innerHTML = count4;
    let totalTests5 = count4 + count11;
    let totalPercentage5 = (count4 / totalTests5) * 100;
    document.getElementById("percentage5").innerHTML = "% Correct: " + totalPercentage5.toFixed(1) + "% : " + count4 +"/"+ totalTests5;
};
var buttonRemove6 = document.getElementById("removeBtn11");
buttonRemove6.onclick = function () {
    if (count5 >= 1){
        count5 -= 1;
    }
    document.getElementById("counterPlus6").innerHTML = count5;
    let totalTests6 = count5 + count12;
    let totalPercentage6 = (count5 / totalTests6) * 100;
    document.getElementById("percentage6").innerHTML = "% Correct: " + totalPercentage6.toFixed(1) + "% : " + count5 +"/"+ totalTests6;
};
var buttonRemove7 = document.getElementById("removeBtn13");
buttonRemove7.onclick = function () {
    if (count6 >= 1){
        count6 -= 1;
    }
    document.getElementById("counterPlus7").innerHTML = count6;
    let totalTests7 = count6 + count13;
    let totalPercentage7 = (count6 / totalTests7) * 100;
    document.getElementById("percentage7").innerHTML = "% Correct: " + totalPercentage7.toFixed(1) + "% : " + count6 +"/"+ totalTests7;
};

// Remove 1 from minus
var buttonRemove8 = document.getElementById("removeBtn2");
buttonRemove8.onclick = function () {
    if (count7 >= 1){
        count7 -= 1;
    }
    document.getElementById("counterMinus1").innerHTML = count7;
    let totalTests1 = count + count7;
    let totalPercentage1 = (count / totalTests1) * 100;
    document.getElementById("percentage1").innerHTML = "% Correct: " + totalPercentage1.toFixed(1) + "% : " + count +"/"+ totalTests1;
};
var buttonRemove9 = document.getElementById("removeBtn4");
buttonRemove9.onclick = function () {
    if (count8 >= 1){
        count8 -= 1;
    }
    document.getElementById("counterMinus2").innerHTML = count8;
    let totalTests2 = count1 + count8;
    let totalPercentage2 = (count1 / totalTests2) * 100;
    document.getElementById("percentage2").innerHTML = "% Correct: " + totalPercentage2.toFixed(1) + "% : " + count1 +"/"+ totalTests2;
};
var buttonRemove10 = document.getElementById("removeBtn6");
buttonRemove10.onclick = function () {
    if (count9 >= 1){
        count9 -= 1;
    }
    document.getElementById("counterMinus3").innerHTML = count9;
    let totalTests3 = count2 + count9;
    let totalPercentage3 = (count2 / totalTests3) * 100;
    document.getElementById("percentage3").innerHTML = "% Correct: " + totalPercentage3.toFixed(1) + "% : " + count2 +"/"+ totalTests3;
};
var buttonRemove11 = document.getElementById("removeBtn8");
buttonRemove11.onclick = function () {
    if (count10 >= 1){
        count10 -= 1;
    }
    document.getElementById("counterMinus4").innerHTML = count10;
    let totalTests4 = count3 + count10;
    let totalPercentage4 = (count3 / totalTests4) * 100;
    document.getElementById("percentage4").innerHTML = "% Correct: " + totalPercentage4.toFixed(1) + "% : " + count3 +"/"+ totalTests4;
};
var buttonRemove12 = document.getElementById("removeBtn10");
buttonRemove12.onclick = function () {
    if (count11 >= 1){
        count11 -= 1;
    }
    document.getElementById("counterMinus5").innerHTML = count11;
    let totalTests5 = count4 + count11;
    let totalPercentage5 = (count4 / totalTests5) * 100;
    document.getElementById("percentage5").innerHTML = "% Correct: " + totalPercentage5.toFixed(1) + "% : " + count4 +"/"+ totalTests5;
};
var buttonRemove13 = document.getElementById("removeBtn12");
buttonRemove13.onclick = function () {
    if (count12 >= 1){
        count12 -= 1;
    }
    document.getElementById("counterMinus6").innerHTML = count12;
    let totalTests6 = count5 + count12;
    let totalPercentage6 = (count5 / totalTests6) * 100;
    document.getElementById("percentage6").innerHTML = "% Correct: " + totalPercentage6.toFixed(1) + "% : " + count5 +"/"+ totalTests6;
};
var buttonRemove14 = document.getElementById("removeBtn14");
buttonRemove14.onclick = function () {
    if (count13 >= 1){
        count13 -= 1;
    }
    document.getElementById("counterMinus7").innerHTML = count13;
    let totalTests7 = count6 + count13;
    let totalPercentage7 = (count6 / totalTests7) * 100;
    document.getElementById("percentage7").innerHTML = "% Correct: " + totalPercentage7.toFixed(1) + "% : " + count6 +"/"+ totalTests7;
};


// // Add new button
// var addButton = document.getElementById("addBtn")
// addButton.onclick = function duplicate() {
//     // Get the element
// var elem = document.querySelector('#goalDiv');

// // Create a copy of it
// var clone = elem.cloneNode(true);

// // Update the ID and add a class
// clone.id = 'elem2';
// clone.classList.add('newGoal');

// // Inject it into the DOM
// elem.after(clone);
// };




