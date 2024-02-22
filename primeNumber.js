let num = 5;
console.log(isPrime(num));


function isPrime(num) {
    for(let i = 2; i<Math.sqrt(num); i++){
        if(num%i == 0){
            return true;
        }
    }
    return false;
}