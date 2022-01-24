
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

