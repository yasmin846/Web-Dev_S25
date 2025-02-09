// task1
//1
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}
//2
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
//in our case, no difference

// task2
//1
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
//2
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// task3
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// task4
function pow(x,n) {
    if (n < 1) {
        alert(`Power ${n} is not supported`);
        return;
    }
    let result = x;
    while (n > 1) {
        result *= x;
        n--;
    }
    return result;
}
alert(pow(8, 3));
  