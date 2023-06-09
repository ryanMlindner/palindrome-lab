const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const palindromeString = event.target.children[1].value;
  console.log(palindromeString);
  const isPalindrome = palindromeAlgo(palindromeString);
  if (isPalindrome) {
    document.getElementById("output").innerText = `${palindromeString} is a palindrome :)`
  }
  else {
    document.getElementById("output").innerText = `${palindromeString} is not a palindrome :(`
  }
});

function palindromeAlgo(string) {
  const length = string.length;
  let comparisonCount = 0;
  let palindrome = true;
  
  for(let index = 0; index < length/2; index++) {
    reverseIndex = length - (index + 1);
    if (index === reverseIndex) {
      break;
    }
    comparisonCount += 1; //assuming complexity relies on number of comparisons
    if (string.charAt(index) !== string.charAt(reverseIndex)) {
      palindrome = false;
      break;
    }
  }
  
  const complexity = `For a string of length ${length}, the algorithm had to make
  ${comparisonCount} comparisons`;
  document.getElementById("statistics").innerText = complexity;
  return palindrome;
}
