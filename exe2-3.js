function findNextSquare(sqr){
    const sqrt = Math.sqrt(sqr);
  if (Number.isInteger(sqrt)) {
    const nextSquareRoot = Math.sqrt(sqr) + 1;
    return nextSquareRoot * nextSquareRoot;
    }else{
        return -1
    }
}

console.log(findNextSquare(36));