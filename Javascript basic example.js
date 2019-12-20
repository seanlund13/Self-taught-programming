//Dont need to define variable data types. They are automatically assigned based on the value given and automatically updated if assigned value is no longer the same type.
//Data types: number, string, boolean (T/F)
/*Variable name rules: 
-Cant be a pre-defined keyword
-First character must be a letter, underscore or a dollar sign.
-Case sensitive
*/
var y = 1;
var x; 
x=2;
document.write(x);

x = "Rewrite";
document.write(x);

//alert(x);

document.write("<h1>The answer is "+y+"</h1>");

var result = x+y+10;
document.write(result);

result = 10+3+x+y+5;
document.write(result);