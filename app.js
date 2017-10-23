module.exports = {
	rainDrops: (number) => {
    if(!number){
      return "You entered an empty value";
    }
  if(isNaN(number)){
      return "The value you entered is not a number";
  }


  let outputString = "";
  if(number % 3 === 0 || number % 5 === 0 || number % 7 === 0){
      if(number % 3 === 0){
          outputString += "Pling";
      }
      if(number % 5 === 0){
          outputString += "Plang";
      }
      if(number % 7 === 0){
          outputString += "Plong";
      }
  }else{
      outputString = number.toString();
  }
  
  return outputString;
	}
}