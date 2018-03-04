$(document).ready(function(){
  /*
   * Programming Quiz: Back to School (3-9)
   */

  // change the value of `education` to test your code
  var education = "no high school diploma";


  // set the value of this based on a person's education
  var salary;

  // your code goes here
  switch (education) {
      case "a high school diploma":
          salary = 35256;
          break;
      case "An Associate's degree":
          salary: 49456;
          break;
      case "a Bachelor's degree":
        salary = 59124;
        break;
      case "a Master's degree":
        salary = 69732;
        break;
      case "a Professional degree":
        salary = 89960;
        break;
        case "a Doctoral degree": s
        alary = 84396;
        break;
      default:
          salary = 25636;
  }

  console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");


//the bottles storing

var num = 99;

while (x >= 1) {
    if (num > 2) {
        newNum = num - 1;
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (newNum - 1) + " bottles of juice on the wall!");
    }else if (num === 1) {
        nUm = num-1;
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!");
    } else if (x === 1) {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!");
    }
    x = x-1;
}




}
