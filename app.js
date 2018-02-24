//                                ALERT

// 1.	Write a script to greet your website visitor using JS alert box.

alert("Welcome User");

// 2.	Write a script to display following message on your web page:

alert("Error! Please Enter Valid Password");

// 3.	Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS land </br> Happy Coding!")

// 4.	Write a script to display following messages in sequence:

alert("Welcome to JS land");
alert("Happy Coding!");

// 5.	Generate the following message through browser’s developer console:

console.log("Hello, I can run JS through my web browser Console.");

// 6.	Make use of alerts in your new/existing HTML & CSS project.

alert("Hello World");

// 7.	Practice placement of <script></script> element in following sections of your project in exercise 6:
    // a.	Head
    // b.	Body (before your page’s HTML)
    // c.	Body (inside your page’s HTML)
    // d.	Body (after your page’s HTML)


//                              VARIABLES FOR STRINGS

// 1. Declare a variable called username. 
var userName;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name. 
var myName="Waqar Uddin";


// 3. Write a script to  
    // a. declare a JS variable, titled message  
    // b. assign “Hello World” to the variable message 
    // c. display the message in alert box
    
var message="Hello World";
alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

var fullName,age,university,course;
fullName="Waqar Uddin";
age="20";
university="KU";
course="Mobile and Web Development - Module A";
alert(fullName);
alert(age);
alert(university);
alert(course);


// 5. Write a script to display the following alert using one JS variable: 

var a="Pizza <br/>Pizz <br/>Piz <br/>Pi <br/>P";
alert(a);

// 6.  Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself? 
// Store the following into variables: number of children, partner’s name, geographic location, and job title. 
// Output your fortune like: 

var numOfChild=5, partnerName="Jane", geoLocation="Greece", jobTitle="CEO";
alert("You will be a "+jobTitle+" in "+geoLocation+" and your partner name will be "+partnerName+" and will have "+numOfChild+" Childeren.")


// 7.  Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation)

var email="abc@example.com";
alert(email);


// 8. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book="A Smarter Way to Learn Javascript";
alert(book);


// 9. Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”,  “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes” 

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

var fullName,age,university,course;
fullName="My name is Waqar Uddin";
age="I'm 20 years old";
university="I study at KU";
course="I'm doing Mobile and Web Development - Module A course";
alert(fullName);
alert(age);
alert(university);
alert(course);


// 10. Write a script to display this in browser through JS 

var message="Yay! I can write HTML through JS"
document.write(message);



//                              VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

var age=20;
alert("I'm "+age+" years old.");


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visits=25;
alert("You have visited this site "+visits+ " times.");


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

var birthYear=1996;
document.write("My birth year is: "+birthYear);


// 4.  A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:  a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.  

var custName="Waqar", quantity=3, productTitle="T-Shirt";
document.write("Customer "+custName+" has just bought "+quantity+productTitle+" from XYZ store.");


//                              VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement. 
var a,b,c;

// 2. Declare 5 legal & 5 illegal variable names.

var a,b,c,d,e,f, 1a, &b, !c, _d, 5f;


//                              MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser

var a=1, b=2, c=a+b;

alert("For numbers "+a+" & "+b+" sum is "+c);

// 2. Repeat task1 for subtraction, multiplication, division & modulus. E.g

var a=1, b=2, c=a-b;

alert("For numbers "+a+" & "+b+" sub is "+c);

var a=1, b=2, c=a*b;

alert("For numbers "+a+" & "+b+" product is "+c);

var a=1, b=2, c=a/b;

alert("For numbers "+a+" & "+b+" divide answer is "+c);

var a=1, b=2, c=a%b;

alert("For numbers "+a+" & "+b+" remainder is "+c);


// 3. Do the following using JS Mathematic Expressions 
//     a. Declare a variable.  
//     b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
//     c. Initialize the variable with some number. 
//     d. Show the value of variable in your browser like “Initial value: 3”. 
//     e. Increment the variable. 
//     f. Show the value of variable in your browser like “Value after increment is: 4”. 
//     g. Add 7 to the variable. 
//     h. Show the value of variable in your browser like “Value after addition is: 11”.  
//     i. Decrement the variable. 
//     j. Show the value of variable in your browser like “Value after decrement is: 10”. 
//     k. Show the remainder after dividing the variable’s value by 3. 
//          Output : “The remainder is : 1” 

var a=5;
document/write("Value after variable declaration is: "+a);
document.write("“Initial value: "+a);
var b=++a, c=--a, d=7+a, e=a%3;
document.write("Value after increment is: "+b);
document.write("Value after addition is: "+d);
document.write("Value after decrement is: "+c);
document.write("The remainder is : "+e);

 
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var movieTicket=600, quantity=5, totalPrice=movieTicket*quantity;
document.write("Each movie ticket will cost "+movieTicket+", and "+quantity+" tickets will cost "+totalPrice);


// 5. Write a script to display multiplication table of any number in your browser. E.g. 

var a=prompt("Enter number:"),b,i;
for (i=1;i<=10;i++)
{
    b=a*i;
    document.write(a+"*"+i+"="+b+"</br>");
}

// 6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//     a. Store a Celsius temperature into a variable. 
//     b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
//     c. Now store a Fahrenheit temperature into a variable. 
//     d. Convert it to Celsius & output “NNoF is NNoC”.

var a=30, C, F=60;
C=(F-32)*5/9;
F=(a*9/5)+32;
