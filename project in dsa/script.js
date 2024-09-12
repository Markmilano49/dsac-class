 function encryptText() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let resultElement = document.getElementById("result");
 
    if (shift > 75) {
      resultElement.innerText = "Error: Shift value cannot exceed 75.";
      resultElement.style.color = "red";
      return;
    }
    let encryptedText = caesarCipher(text, shift);
    resultElement.innerText = "Encrypted Message: " + encryptedText;
    resultElement.style.color = "#00ffff"; 
  }

  function decryptText() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let resultElement = document.getElementById("result");

    if (shift > 75) {
      resultElement.innerText = "Error: Shift value cannot exceed 75.";
      resultElement.style.color = "red";
      return;
    }

    let decryptedText = caesarCipher(text, -shift);
    resultElement.innerText = "Decrypted Message: " + decryptedText;
    resultElement.style.color = "#00ffff"; 
  }

  function caesarCipher(str, shift) {
    return str.split('').map(function(char) {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
      }
      else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
      }
      return char;
    }).join('');
  }


