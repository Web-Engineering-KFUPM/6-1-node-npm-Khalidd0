// calculator.js

// ============================
// TODO 1: Import Required Modules
// ============================
import _ from "lodash";
import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";

// Helper for usage
function printUsage() {
  console.log(`Usage:
  node calculator.js <operation> <num1> <num2> [num3 ...]
Operations:
  add, subtract, multiply, divide
Examples:
  node calculator.js add 5 10 15
  node calculator.js subtract 20 5 3
  node calculator.js multiply 2 3 4
  node calculator.js divide 20 2 5
`);
}

try {
  // ============================
  // TODO 2: Parse Command Line Args
  // ============================
  const operation = process.argv[2];
  const numberArgs = process.argv.slice(3);

  // ============================
  // TODO 3: Validate & Calculate
  // ============================
  if (!isValidOperation(operation)) {
    console.log("Invalid operation. Use: add, subtract, multiply, or divide");
    printUsage();
    process.exit(1);
  }

  const nums = parseNumbers(numberArgs);

  if (nums.length < 2) {
    console.log("Please provide at least two numbers.");
    printUsage();
    process.exit(1);
  }

  let result;
  switch (operation) {
    case "add":
      result = add(nums);
      break;
    case "subtract":
      result = subtract(nums);
      break;
    case "multiply":
      result = multiply(nums);
      break;
    case "divide":
      result = divide(nums);
      break;
    default:
      console.log("Invalid operation. Use: add, subtract, multiply, or divide");
      printUsage();
      process.exit(1);
  }

  console.log(`Result: ${result}`);
} catch (err) {
  console.error("Error:", err.message);
  printUsage();
  process.exit(1);
}
