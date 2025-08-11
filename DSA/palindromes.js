function palindrome(text) {
  const reversedText = text.split("").reverse().join("");
  if (text === reversedText) {
    console.log(`${text} is a palindrom`);
  } else {
    console.log("No palindrome detected");
  }
}

palindrome("hello");
palindrome("cddc");
