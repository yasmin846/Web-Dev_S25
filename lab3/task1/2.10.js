// task1
if ("0") {
    alert( 'Hello' );
}
//it will be shown, any string exept an empty one will become 'true'

// task2
if(prompt("What's the 'official' name of JavaScript?","")=="ECMAScript"){
    alert("Rigth!")
} else {
    alert("You don't know? 'ECMAScript'!")
}

// task3
let value = prompt('Type in a number', 0);

if (value > 0) {
  alert(1);
} else if (value<0) {
  alert(-1);
} else {
  alert(0);
}

// task4
let result = (a + b < 4) ? 'Below' : 'Over';

// task5
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';