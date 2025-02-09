// task1
alert( null || 2 || undefined ); //2, takes the first truthy

// task2
alert( alert(1) || 2 || alert(3) ); //1 then 2, because alert() returns undefined

// task3
alert( 1 && null && 2 ); //null, takes first falsy

// task4
alert( alert(1) && alert(2) ); //1, then undefined, alert() returns undefined-->falsy

// task5
alert( null || 2 && 3 || 4 ); //3, the result of 2&&3 = 3, then null || 3 || 4 - first truthy = 3

// task6
if (age >= 14 && age <= 90){
    alert("Between 14 and 90 inclusively")
}

// task7
if (age < 14 || age > 90){
    alert("Outside the range between 14 and 90 inclusively")
}
if (!(age >= 14 && age <= 90)){
    alert("Outside the range between 14 and 90 inclusively")
}

// task8
if (-1 || 0) alert( 'first' ); //truthy, -1 || 0 = -1
if (-1 && 0) alert( 'second' ); //falsy, -1 && 0 = 0
if (null || -1 && 1) alert( 'third' ); //truthy, null || -1 && 1 = null || 1 = 1

// task9
let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}