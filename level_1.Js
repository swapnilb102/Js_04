//Exercises: Level 1 
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. 
let firstName = 'Riya'
let lastName = 'Kumari'
let country = 'India'
let city = 'Banglore'
let age = 25
let isMarried = false
let year = 2022
console.log(typeof firstName)
  console.log(typeof lastName)
    console.log(typeof country)
      console.log(typeof city)
       console.log(typeof age)
        console.log(typeof isMarried)
          console.log(typeof year)

//2. Check if type of '10' is equal to 10 
console.log(typeof '10' == 10)

//3. Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8') == 10)   

/*4. Boolean value is either true or false. 
1. Write three JavaScript statement which provide truthy value. 
2. Write three JavaScript statement which provide falsy value.*/

//Solution 1
console.log(Boolean(10))
console.log(Boolean(1))
console.log(Boolean(-10))

//solution 2
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 
//1. 4 > 3 
  console.log(4>3)

//2. 4 >= 3 
  console.log(4>=3)

//3. 4 < 3 
  console.log(4<3)

//4. 4 <= 3 
console.log(4<=3)

//5. 4 == 4 
console.log(4==4)

//6. 4 === 4 
console.log(4===4)

//7. 4 != 4 
console.log(4!=4)

//8. 4 !== 4 
console.log(4!==4)

//9. 4 != '4' 
console.log(4!='4')

//10. 4 == '4' 
console.log(4=='4')

//11. 4 === '4' 
console.log(4==='4')

//12. Find the length of python and jargon and make a falsy comparison statement. 
a = 'python'
b = 'jargon'
console.log(a.length == b.length)

//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() 
//1. 4 > 3 && 10 < 12 
console.log(4 > 3 && 10 < 12)  

//2. 4 > 3 && 10 > 12 
console.log( 4 > 3 && 10 > 12)

//3. 4 > 3 || 10 < 12 
console.log(4 > 3 || 10 < 12)

//4. 4 > 3 || 10 > 12 
console.log(4 > 3 || 10 > 12)

//5. !(4 > 3) 
console.log(!(4 > 3))

//6. !(4 < 3) 
console.log(!(4 < 3))

//7. !(false) 
console.log(!(false))

//8. !(4 > 3 && 10 < 12) 
console.log(!(4 > 3 && 10 < 12))

//9. !(4 > 3 && 10 > 12) 
console.log(!(4 > 3 && 10 > 12))

//10. !(4 === '4') 
console.log(!(4 === '4'))

//11. There is no 'on' in both dragon and python
console.log('dragon'.includes('on' && 'python'.includes('on')))

//7. Use the Date object to do the following activities 
//1. What is the year today? 
console.log(new Date().getFullYear())

//2. What is the month today as a number? 
console.log(new Date().getMonth())

//3. What is the date today? 
console.log(new Date().getDate())

//4. What is the day today as a number? 
console.log(new Date().getDay())

//5. What is the hours now? 
console.log(new Date().getHours())

//6. What is the minutes now? 
console.log(new Date().getMinutes())

//7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getTime())
