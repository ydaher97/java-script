function countDuplicates(str) {
    const charCounts = {};
  
    for (let char of str.toLowerCase()) {
      if (/[a-z0-9]/.test(char)) {
        charCounts[char] = (charCounts[char] || 0) + 1;
      }
    }
  
    let dupl = 0;
    for (let char in charCounts) {
      if (charCounts[char] > 1) {
        dupl++;
      }
    }
  
    return dupl;
  }
  
  console.log(countDuplicates("abcde"));  
  console.log(countDuplicates("aabbcde"));  
  console.log(countDuplicates("aabBcde"));  
  