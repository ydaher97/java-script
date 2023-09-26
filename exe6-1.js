function accum(str){
    const result = [];

  for (let i = 0; i < str.length; i++) {
    const repeat = str[i].toLowerCase().repeat(i + 1);
    const capital = str[i].toUpperCase();
    result.push(capital + repeat.slice(1));
  }

  return result.join('-');

}

console.log(accum('string'))