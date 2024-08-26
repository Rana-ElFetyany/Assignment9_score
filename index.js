function checkScore(score) {
  
  if (score > 100 || score < 0) {
    console.log("Invalid Score");
  } else if (score === 100) {
    console.log("Perfect Score");
  } else if (score >= 85 && score < 100) {
    console.log("You got an A");
  } else if (score >= 75 && score < 85) {
    console.log("You got a B");
  } else if (score >= 65 && score < 75) {
    console.log("You got a C");
  } else if (score >= 50 && score < 65) {
    console.log("You got a D");
  } else if (score >= 0 && score < 50) {
    console.log("You got an F");
  } else {
    console.log("Not a Number");
  }

 
//   switch (true) {
//     case score > 100 || score < 0:
//       console.log("Invalid Score");
//       break;
//     case score === 100:
//       console.log("Perfect Score");
//       break;
//     case score >= 85:
//       console.log("You got an A");
//       break;
//     case score >= 75:
//       console.log("You got a B");
//       break;
//     case score >= 65:
//       console.log("You got a C");
//       break;
//     case score >= 50:
//       console.log("You got a D");
//       break;
//     case score >= 0:
//       console.log("You got an F");
//       break;
//     default:
//       console.log("Not a Number");
//   }
}

let score = prompt("Enter your exam score:")

checkScore(score);

