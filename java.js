// Counter Plus Buttons
var button1 = document.getElementById("counterPlus1btn"),
    count = 0;
button1.onclick = function () {
    count += 1;
    document.getElementById("counterPlus1").innerHTML = count;
};
var button2 = document.getElementById("counterPlus2btn"),
    count1 = 0;
button2.onclick = function () {
    count1 += 1;
    document.getElementById("counterPlus2").innerHTML = count1;
};
var button3 = document.getElementById("counterPlus3btn"),
    count2 = 0;
button3.onclick = function () {
    count2 += 1;
    document.getElementById("counterPlus3").innerHTML = count2;
};
var button4 = document.getElementById("counterPlus4btn"),
    count3 = 0;
button4.onclick = function () {
    count3 += 1;
    document.getElementById("counterPlus4").innerHTML = count3;
};
var button5 = document.getElementById("counterPlus5btn"),
    count4 = 0;
button5.onclick = function () {
    count4 += 1;
    document.getElementById("counterPlus5").innerHTML = count4;
};
var button6 = document.getElementById("counterPlus6btn"),
    count5 = 0;
button6.onclick = function () {
    count5 += 1;
    document.getElementById("counterPlus6").innerHTML = count5;
};
var button7 = document.getElementById("counterPlus7btn"),
    count6 = 0;
button7.onclick = function () {
    count6 += 1;
    document.getElementById("counterPlus7").innerHTML = count6;
};
// Counter Minus Buttons
var button8 = document.getElementById("counterMinus1btn"),
    count7 = 0;
button8.onclick = function () {
    count7 += 1;
    document.getElementById("counterMinus1").innerHTML = count7;
};
var button9 = document.getElementById("counterMinus2btn"),
    count8 = 0;
button9.onclick = function () {
    count8 += 1;
    document.getElementById("counterMinus2").innerHTML = count8;
};
var button10 = document.getElementById("counterMinus3btn"),
    count9 = 0;
button11.onclick = function () {
    count9 += 1;
    document.getElementById("counterMinus3").innerHTML = count9;
};
var button12 = document.getElementById("counterMinus4btn"),
    count10 = 0;
button12.onclick = function () {
    count10 += 1;
    document.getElementById("counterMinus4").innerHTML = count10;
};
var button13 = document.getElementById("counterMinus5btn"),
    count11 = 0;
button13.onclick = function () {
    count11 += 1;
    document.getElementById("counterMinus5").innerHTML = count11;
};
var button14 = document.getElementById("counterMinus6btn"),
    count12 = 0;
button14.onclick = function () {
    count12 += 1;
    document.getElementById("counterMinus6").innerHTML = count12;
};
var button15 = document.getElementById("counterMinus7btn"),
    count13 = 0;
button15.onclick = function () {
    count13 += 1;
    document.getElementById("counterMinus7").innerHTML = count13;
};

// Remove 1 from Count buttons

var button16 = document.getElementById("removeBtn1");
button16.onclick = function () {
    if (count >= 0) {
        count -= 1;
        document.getElementById("counterPlus1").innerHTML = count;
    }
};