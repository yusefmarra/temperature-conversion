function tempConversion(temp, celsius) {
  if (celsius){          //We are converting FROM celsius TO fahrenheit
    return (temp * 1.8 + 32);
  } else {               //We are converting FROM fahrenheit TO celsius
    return (temp -32)/1.8;
  }
}

console.log(tempConversion(80, 1));
