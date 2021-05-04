// Not all functions are imported, be careful 👇
const {
	subtract,
	divide,
	isDivisibleBy,
	gradeAssignment,
	areaOrPerimeter,
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
// refer to smoke.test.js file
// Section A 02. Test the subtraction() function
// Feel free to delete all of the starter test block and make it better
//Test the subtract() function (provided). Make sure you tested it with different
// edge cases. Have a think - what do we expect when we minus a negative number?
// Here is your chance to use multiple assertions within one test.

describe("Test the subtract function", () => {
	test("Subtract 2 positive numbers, where the first parameter is larger than the scond one", () => {
		let num1 = 5;
		let num2 = 1;
		var expected = 4;
		var output = subtract(num1, num2);
		expected(subtract(num1 - num2).toBe(expected));
	});
});

// Section A 03. Test the divide() function
// Feel free to delete all of the starter test block and make it better

it("Should divide numbers and not allow division by 0", () => {});

// Section A 04. Test the isDivisibleBy() function

// Section A 05. Test the areaOrPerimeter() function

// Section A 06. Test the gradeAssignment() function

// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function
