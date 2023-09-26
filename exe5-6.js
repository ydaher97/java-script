function maskify(str){
    const masked = '#'.repeat(str.length - 4) + str.slice(-4);
    return masked;
}

console.log(maskify("4556364607935616"));