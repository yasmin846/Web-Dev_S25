// task1
let i = 3;

while (i) {
  alert( i-- );
}// answer = 1
/*
alert(i--); // shows 3, decreases i to 2
alert(i--) // shows 2, decreases i to 1
alert(i--) // shows 1, decreases i to 0
done, while(i) check stops the loop
*/

// task2
// 1
let i1 = 0;
while (++i1 < 5) alert( i1 );
/*
++0 -> 1, alert(1)
...
++4 -> 5, loop stops
*/
//2
let i2 = 0;
while (i2++ < 5) alert( i2 );
/*
0++ -> 0 < 5, alert(1)
1++ -> 1 < 5, alert(2)
...
4++ -> 4 < 5, alert(5)
*/

// task3
//1
for (let i = 0; i < 5; i++) alert( i ); // 0,1,2,3,4
//2
for (let i = 0; i < 5; ++i) alert( i ); // 0,1,2,3,4

// task4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

// task5
let i5 = 0;
while (i5 < 3) {
  alert( `number ${i5}!` );
  i5++;
}

// task6
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// task7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  alert( i ); // a prime
}