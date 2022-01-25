

alert("hi bushra we wan to ask you some questions");

let checkQusetion = (inputAnswer) => {
  let userAnwer = prompt(inputAnswer);
  if(userAnwer == "yes" || userAnwer == "mo" ){
    return  userAnwer;
                                    } 
  else if (userAnwer ==""){
return "Invalid";
  }
  else {
    prompt("Please Answer With yes/no");
  }

}

let answer1 = checkQusetion("Is Blue Your Favorite Color?") ;

let answer2= checkQusetion("Do You Have A Bachelor's Degree At CIS? ") ;

let answer3= checkQusetion("Do You Live In Korea? ");



let answerArray = [answer1,answer2,answer3] ;


let printEelements = (array) => {
  for(let i=0 ; i<= array.length -1 ; i++){

 console.log(array[i]); } }


printEelements(answerArray);


// var name = prompt("Enter Your Name Please");
// console.log("your age is: "+ name);
// var gender = prompt("Enter Your Gender Please" );
//  if( gender.toLowerCase() === "female" || gender.toLowerCase() === "male")

// {
//   console.log("your age is: "+ gender);
// }
// else {
//  prompt("Choose Correct Gender Type Please:");
// }

// var age=prompt("Enter Your Age Please:");
// if(age <= 0){
//   alert(age + "s Not A Valid Age Please Type Correct One");
//   prompt("Enter Your Age Please:");
// }

// var welcome = confirm("Do You Want To Skip The Welcoming Message?");
// if(welcome === false && gender.toLowerCase() === "male")
// {

//     alert("Welcome Mr "+ name);
//   }
//   else if (welcome === false && gender.toLowerCase() === "female"){
//     alert("Welcome Ms "+ name);
//   }

// else{
//   alert("Welcome");
// }

