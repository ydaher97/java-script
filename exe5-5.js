function nameToInitials(name) {
    const words = name.split(' ');
    console.log(words)
    const initials = words.map(word => word[0].toUpperCase()).join('.');
    return initials;
  }
  
  console.log(nameToInitials("Sam Harris")); 
  console.log(nameToInitials("John Smith")); 
  