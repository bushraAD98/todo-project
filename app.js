var name = prompt("Enter Your Name Please");
console.log("your age is: "+ name);
var gender = prompt("Enter Your Gender Please" );
 if( gender.toLowerCase() === "female" || gender.toLowerCase() === "male")

{
  console.log("your age is: "+ gender);
}
else {
 prompt("Choose Correct Gender Type Please:");
}

var age=prompt("Enter Your Age Please:");
if(age <= 0){
  alert(age + "s Not A Valid Age Please Type Correct One");
  prompt("Enter Your Age Please:");
}

var welcome = confirm("Do You Want To Skip The Welcoming Message?");
if(welcome === false && gender.toLowerCase() === "male")
{

    alert("Welcome Mr "+ name);
  }
  else if (welcome === false && gender.toLowerCase() === "female"){
    alert("Welcome Ms "+ name);
  }

else{
  alert("Welcome");
}