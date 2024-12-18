function prr(num) {
    if (num <= 1){
         return "is not prime number";
        }
    else if (num === 2||num===3 || num===5) {
        return " is prime number"; 
     }
   else if (num % 2 === 0 ||num% 3===0|| num%5===0)  {
        return "is not prime number";
     }

          else{
    return "is prime number";
}
}

let c = 25;
console.log(prr(c)); 
