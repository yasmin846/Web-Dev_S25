// task1
let a=1, b=1;
let c = ++a;//2
let d = b++;//1

// task2
let a2 = 2;
let x = 1 + (a2 *= 2); //5

// task3
"" + 1 + 0 //'10'
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //'9px'
"$" + 4 + 5 //'$45'
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //' -9 5'
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2

// task4
let a4 = prompt("First number?", 1);
let b4 = prompt("Second number?", 2);
alert(+a + +b); // 3