// Task 4 :-palindrome string
/**
 * Checks if a given string is a palindrome.
 * A palindrome reads the same forwards and backwards, ignoring punctuation and casing.
 * * @param {string} str - The input string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
   
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

   
    const reversedString = cleanedString.split('').reverse().join('');

  
    return cleanedString === reversedString;
}

// --- Demonstration and Tests ---

console.log("--- Palindrome Checker Tests ---");

// Test Case 1: Simple Palindrome
const test1 = "madam";
console.log(`"${test1}" is a palindrome: ${isPalindrome(test1)}`); // Output: true

// Test Case 2: Palindrome with mixed case and punctuation
const test2 = "A man, a plan, a canal: Panama";
console.log(`"${test2}" is a palindrome: ${isPalindrome(test2)}`); // Output: true

// Test Case 3: Not a Palindrome
const test3 = "hello world";
console.log(`"${test3}" is a palindrome: ${isPalindrome(test3)}`); // Output: false

// Test Case 4: Palindrome with numbers
const test4 = "1 racecar 1";
console.log(`"${test4}" is a palindrome: ${isPalindrome(test4)}`); // Output: true