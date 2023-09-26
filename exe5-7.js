function shortWord(str){
    const words = str.split(' ');
    let shortest = words[0].length;

    for (const word of words) {
      const length = word.length;
      if (length < shortest) {
        shortest = length;
      }
    }
    return shortest
}

console.log(shortWord("Simple, given a string of words"));
