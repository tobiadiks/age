var clock = new Date();
var year = clock.getFullYear();
function ages(){
var inputed=document.getElementById("year").value
if (inputed<=year){
age=year - inputed;

document.getElementById("result").innerHTML = age + " year old";
}
if(inputed==""||inputed>year)
 {
		document.getElementById("result").innerHTML = "invalid year";
}
console.log(age);
}
