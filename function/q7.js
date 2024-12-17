function num(str){
  str= str.toLowerCase();

  let reversedStr = str.split('').reverse().join('');
    return str===reversedStr;
}
// let c="malayalam";
let r= num("malayalam");
console.log(r)
