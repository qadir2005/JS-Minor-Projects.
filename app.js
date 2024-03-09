let num1 = +prompt("Enter The First Value");
let calculation = prompt("+ - / * ");
let num2 = +prompt("Enter The Second Value");
// Condition
if (calculation === "+") {
    alert(num1 + num2);
    document.write('The first value is : ' + num1 + " " + "<br>")
    document.write("The Second value is : " + num2 + " " + "<br>")
    document.write("Final Answer : " + num1 + num2)
}
else if (calculation === "-") {
    alert(num1 - num2)
    document.write('The first value is : ' + num1 + " " + "<br>")
    document.write("The Second value is : " + num2 + " " + "<br>")
    document.write("Final Answer : " + num1 - num2)
}
else if (calculation === "*") {
    alert(num1 * num2)
    document.write('The first value is : ' + num1 + " " + "<br>")
    document.write("The Second value is : " + num2 + " " + "<br>")
    document.write("Final Answer : " + num1 * num2)
}
else if (calculation === "/") {
    alert(num1 / num2)
    document.write('The first value is : ' + num1 + " " + "<br>")
    document.write("The Second value is : " + num2 + " " + "<br>")
    document.write("Final Answer : " + num1 / num2)
}
else if (calculation === "%") {
    alert(num1 % num2)
    document.write('The first value is : ' + num1 + " " + "<br>")
    document.write("The Second value is : " + num2 + " " + "<br>")
    document.write("Final Answer : " + num1 % num2)
}
else {
    alert("This is not Arithmetic Operator")
}



