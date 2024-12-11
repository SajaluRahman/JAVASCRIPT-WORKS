// function area(n) {
//     if(n==1||n==0){
//         return 1;

//     }
//     else{
//         return n * area(n - 1);
//     }
    
//  }
 
// let c= area(5);
// console.log(c)


function hi(n){
    let a=1;
    for(i=1;i<=n;i++){
        a*=i;
    }
    return a;
}

n=5
let c=hi(n);
console.log(c);
