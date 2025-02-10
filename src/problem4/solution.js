// Problem 4: Three ways to sum to n
// Iterative Approach
function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
/*
   Time: O(n) - Iterates through all numbers up to n.
   Space: O(1) - Uses a single variable.
   Pros: Simple and safe.
   Cons: Slower than the mathematical formula.
*/
// Recursive Approach
function sum_to_n_b(n) {
    if (n <= 1)
        return n;
    return n + sum_to_n_b(n - 1);
}
/*
   Time: O(n) - Calls itself n times.
   Space: O(n) - Uses stack frames for recursion.
   Pros: Clean and concise.
   Cons: Risk of stack overflow for large n.
*/
// Mathematical Formula
function sum_to_n_c(n) {
    return (n * (n + 1)) / 2;
}
/*
   Time: O(1) - Constant time calculation.
   Space: O(1) - No extra memory usage.
   Pros: Fastest solution.
   Cons: Risk of integer overflow for very large n.
*/
// Test cases
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
