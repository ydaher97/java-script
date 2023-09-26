function isIsogram(str) {
    const charMap = {};
    
    for (let char of str.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        if (charMap[char]) {
          return false;
        }
        charMap[char] = true;
      }
    }
    
    return true;
  }
  
  console.log(isIsogram("Dermatoglyphics")); // Output: true
  console.log(isIsogram("aba"));             // Output: false
  