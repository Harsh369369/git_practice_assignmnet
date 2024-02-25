let num = 5;

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let ans = isPrime(num);
if (ans == true) {
  console.log(`Yes, ${num} is Prime Number`);
} else {
  console.log(`No, ${num} is not a Prime Number`);
}