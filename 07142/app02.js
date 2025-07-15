// switch

var a = 10

switch (a) {
  case "10": 
    console.log('a is 10');
    break;
  case 10:
    console.log('a is 10');
    break;
  default:
    console.log('else');
}
switch (typeof a) {
  case 'string':
    console.log('a is a string');
    break;
  case 'number':
    console.log('a is a number');
    break;
  default:
    console.log('a is of another type');
}
// Output: a is a number
// Explanation: This switch statement checks the type of variable 'a' and matches it against the cases. Since 'a' is a number, it executes the corresponding block for 'number'.
// Note: The typeof operator returns a string representing the type of the unevaluated operand,

// which is why we can use it in a switch statement to differentiate between types.
// This is useful for type checking in scenarios where you might have different types of values and want

// to handle them differently based on their type.
// Remember that switch statements are not limited to numbers; they can also be used with strings,
// booleans, and other types, as long as the cases are defined appropriately.
// However, be cautious with types and ensure that the cases you define match the expected types of
// the variable being evaluated. Using strict equality (===) is crucial to avoid unexpected behavior.
// Example of using switch with a string
