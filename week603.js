const mark = 80;
let grade;
if(mark>=80 && mark<=10) {
    message = `Grade A is ${mark}`;
}else if(mark>=70 && mark<80){
    message = `Grade B is ${mark}`; 
}else if(mark>=60 && mark<70){
    message = `Grade C is ${mark}`; 
}else if(mark>=50 && mark<60){
    message = `Grade F is ${mark}`;
}else{
    message = `Grade ERROR is ${mark}`;                
}
console.log(message)
