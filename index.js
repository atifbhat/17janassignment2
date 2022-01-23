let fruit = ["Banana", "Orange", "Apple", "Mango"];
document.write(`Before Sort :- ${fruit}`)
document.write("<br/>");

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

document.write(`After Sort :- ${fruits}`);
document.write("<br/>");
document.write("<br/>");




// let fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = fruits.join(" and ");
document.write(`Before Join :- ${fruits}`);
document.write("<br/>");



document.write(`After Join :- ${text}`);
document.write("<br/>");
document.write("<br/>");




let split = "How are you doing today?";
document.write(`Before Split :- ${split}`);
document.write("<br/>");

const myArray = split.split(" ");
document.write("After Split :-");

document.write(myArray);
document.write("<br/>");