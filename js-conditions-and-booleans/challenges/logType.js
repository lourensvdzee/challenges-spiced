let data = [];
let datatype = typeof data;

switch (data) {
case undefined:
    console.log("undefined!");
    break;
case null:
    console.log("null!");
    break;
case "number":
    console.log("number!");
    break;
case "NaN":
    console.log("not a number!");
    break;
case "string":
    console.log("string!");
    break;
case "boolean":
    console.log("boolean!");
    break;
case "bigint":
    console.log("bigint!");
    break;    
case "function":
    console.log("function!");
    break; 
case "object":
    console.log("object!");     
    break; 
case (Array.isArray(data)):
    console.log("array!");
    break;     
  default:
    console.log("I have no idea!");
}