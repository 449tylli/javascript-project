function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Erreur : division par zéro";
  return a / b;
}

console.log("Addition :      2 + 3 =", add(2, 3));
console.log("Soustraction :  10 - 4 =", subtract(10, 4));
console.log("Multiplication: 5 * 6 =", multiply(5, 6));
console.log("Division :      15 / 3 =", divide(15, 3));
console.log("Division :      8 / 0 =", divide(8, 0));
