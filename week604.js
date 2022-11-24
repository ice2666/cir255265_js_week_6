const mark = 60;

let message;
switch (mark) {
    case ((mark >= 80 && mark <= 100 ? mark:80)):
        console.log(mark)
        message = `Grade A is ${mark}`;
        break;
   
    case ((mark >= 70 && mark < 80 ? mark:79)):
        message = `Grade B is ${mark}`;
        break;
   
    case ((mark >= 60 && mark < 70 ? mark : 69)):
        message = `Grade B is ${mark}`;
        break;
   
    default:
        message = `ERROR is ${mark}`;
}
console.log(message)