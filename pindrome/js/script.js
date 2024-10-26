function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const result = document.getElementById('result');

    if (isPalindrome(inputText)) {
        result.textContent = `"${inputText}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputText}" is not a palindrome.`;
        result.style.color = 'red';
    }
}

function isPalindrome(x) {
    x = x.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const reversed = x.split('').reverse().join('');
    return reversed === x;
}
