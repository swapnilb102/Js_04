//Exercises: Level 2 
/*1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
Enter base: 20 
Enter height: 10 
The area of the triangle is 100*/

base = prompt("Enter base:");
height = prompt("Enter height:"); 
area1 = 0.5 * base * height;
console.log("The area of the triangle is", area1);

/*2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 
Enter side a: 5 
Enter side b: 4 
Enter side c: 3 
The perimeter of the triangle is 12*/

let A = parseFloat(prompt("Enter the length of side a:"));
let B = parseFloat(prompt("Enter the length of side b:"));
let C = parseFloat(prompt("Enter the length of side c:"));
let perimeter = A + B + C;
console.log("The perimeter of the triangle is:", + perimeter);


/*3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))*/
let length = parseFloat(prompt("Enter length:"));
let width = parseFloat(prompt("Enter width:"));
let area2 = length * width;
let perimeter2 = 2 * (length + width);
console.log("The area of the rectangle is:", area2);
console.log("The perimeter of the rectangle is:", + perimeter2); 


/*4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */
let radius = parseFloat(prompt("Enter radius:"));
let area3 = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;
console.log("The area of the circle is:", area3);
console.log("The circumference of the circle is:", circumference);


//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 
let Slope = 2;
//x-intercept ,so we take value of y = 0 to find the value of x
//0 = 2x -2 
//2x=2
//x=1
let xIntercept = 1;
//y-intercept, so we take value of x = 0 to find the value of y
//y = 2(0) -2
//y= -2
let yIntercept = -2;

console.log("Slope:" + Slope);
console.log("x-intercept:" + xIntercept);
console.log("y-intercept:" + yIntercept);


//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) 

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2 - y1) / (x2 - x1);
console.log("The slope is:", m);


//7. Compare the slope of above two questions. 



//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. 
let x = parseFloat(prompt("Enter x:"));
let y = x * x + 6 * x + 9;
console.log("The value of y is:", y);



/*9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? 
Enter hours: 40 
Enter rate per hour: 28 
Your weekly earning is 1120*/

let hours = parseFloat(prompt("Enter hours:"));
let rate = parseFloat(prompt("Enter rate per hour:"));
let pay = hours * rate;
console.log("Your weekly earning is:", pay);



//10. If the length of your name is greater than 7 say, your name is long else say your name is short. 

let name = prompt("Enter your name:");
if (name.length > 7)
{
  console.log("Your name is long.");
}
else
  console.log("Your name is short.");
  
  
/*11. Compare your first name length and your family name length and you should get this output. 
let firstName = 'Asabeneh' 
let lastName = 'Yetayeh' 
Your first name, Asabeneh is longer than your family name, Yetayeh */

let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length)
{
  console.log("Your first name, " + firstName + ", is longer than your family name, " + lastName + ".");
}
else
  console.log("Your first name, " + firstName + ", is shorter than your family name, " + lastName + ".");

/*12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250 
let yourAge = 25 
I am 225 years older than you. */

let myAge = 250;
let yourAge = 25;
let difference = myAge - yourAge;
console.log("I am " + difference + " years older than you.");


/*13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. 
Enter birth year: 1995 
You are 25. You are old enough to drive 
Enter birth year: 2005 
You are 15. You will be allowed to drive after 3 years. */

let birthYear = parseInt(prompt("Enter birth year:"));
let age = 2024 - birthYear;
if (age >= 18)
{
  console.log("You are " + age + ". You are old enough to drive.");
}
else
  console.log( "You are " + age + ". You will be allowed to drive after " + (18 - age) + " years")

  
  
/*14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years 
Enter number of years you live: 100 
You lived 3153600000 seconds. */

let years = parseInt(prompt("Enter number of years you live:"));
let seconds = years * 3153600000;
console.log("You lived " + seconds + " seconds.");


/*15. Create a human readable time format using the Date time object 
1. YYYY-MM-DD HH:mm 
2. DD-MM-YYYY HH:mm 
3. DD/MM/YYYY HH:mm */

let date = new Date();
let time = date.toLocaleTimeString();
console.log(time);
let date1 = new Date();
let time1 = date1.toLocaleDateString();
console.log(time1);
let date2 = new Date();
let time2 = date2.toLocaleDateString();
console.log(time2);
