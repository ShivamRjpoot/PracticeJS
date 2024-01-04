// var shiv= new String("SHIVAM");
// var gaur=shiv;
// // let lastName="RAGHAV";
// shiv[1]="M";
// console.log(shiv);
// console.log(gaur);

let objectString = new String("   SHIVAM  ");
let str = objectString;  // Both objectString and str reference the same String object

console.log(objectString);  // Outputs "SHIVAM"
console.log(str);           // Outputs "SHIVAM"

// Modifying the content of the underlying object
objectString[0] = "M";

console.log(objectString);  // Outputs "MHIVAM"
console.log(str);           // Outputs "MHIVAM" (both are modified)

