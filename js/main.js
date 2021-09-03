// Simple Version

// Note you can log out all the global variables in the 
// chrome console in order to check


// create two variables to capture the numbers being clicked!
let inputOne = '';
let inputTwo = '';

// create two variables 
let operation; // two capture the operation add, subtract, divide, multiply
let result; // will hold the result of the operation

// Please refer to the HTML to so what is being selected 
// from the DOM

// select the place where you want to render the result
const resultDisplay = document.querySelector('#result');

// Select the section with the numbers
const numbers = document.querySelector('#calculator >#numbers')
// select the section with the operations /, x, +, /
const operations = document.querySelector('#operations');
// select the button to calculate the operation (=)
const calculateOperator = document.querySelector('#calculate');

// using event delegation to listen to whatever button is
// being clicked
numbers.addEventListener('click', function(e){
	// update some styling to see that the button is being clicked
	e.target.style.backgroundColor = 'red';
	
	if(inputOne === ''){ // check to see if the inputOne has been filled
		// already, it hasn't been clicked if inputOne value is still ''
		inputOne = e.target.innerText; // e.target is the element you are clicking on
		// e.target could be <div>1</div>, <div>2,</div>,etc
	} else {
		// if inputOne has a value, you know its the second click
		inputTwo = e.target.innerText; // innerText grabs the values between the tags
	}
})

operations.addEventListener('click', function(e){
	// update the ui so you know the operation is being clicked
	e.target.style.backgroundColor = 'red';
	// update the operation (x + - /), e.target is what you clicked on
	// grab the innerText so you know if it is (x + - /)
	operation = e.target.innerText
})

calculateOperator.addEventListener('click', function(){
	// When you click on the = sign, look at the definition of the 
	// variable calculateOperator, and look at the html to see what it is again

	// Use an if/else to find out what operation to perform 
	if(operation === 'x'){
		result = multiply(inputOne, inputTwo)
	} else if(operation === '/'){
		result = divide(inputOne, inputTwo)
	} else if(operation === '-'){
		result = subtract(inputOne, inputTwo)
	} else {
		result = add(inputOne, inputTwo)
	}
	// update the resultDisplay 
	resultDisplay.innerText = `Result: ${result}`;
	resultDisplay.style.backgroundColor = 'lightblue';
})


const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', function(){

	// set everything back to original state
	inputOne = ''
	inputTwo = ''
	operation = ''
	result = ''

	resultDisplay.innerText = `Result:`
	resultDisplay.style.backgroundColor = '';



   // operations.children returns the following
   // HTMLCollection(4) [div, div, div, div]

   // the children property will return all the children 
   // inside of the given element, in our case here operations
   // is referring to the element we were selecting on line 24 #operations in the html

   // for HTMLCollection, they are not really arrays, so 
   // we have to us for or loops
	for (let opElement of operations.children){
		opElement.style.backgroundColor = ''
	}

	for (let numElement of numbers.children){
		numElement.style.backgroundColor = ''	
	}
    
	// Another possible solution instead of for of loops 
	// is to convert the HTMLCollection to arrays using
	// the Array.from method 

	// Array.from(operations.children).forEach((opElement) => {
		// opElement.style.backgroundColor = ''	
	// })

	// Array.from(numbers.children).forEach((numElement) => {
	// 	numElement.style.backgroundColor = ''
	// })
})

function add(x, y){
 return x + y
}

function subtract(x, y){
	return x - y
}

function multiply(x, y){
	return x * y
}

function divide(x, y){
	return x / y
}

