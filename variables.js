/*let todolist = [];
function addtask(task){
    todolist.push(task);
}
function removetask(task){
    todolist.pop(task);
}
addtask("learn js");
addtask("learn git and github");
addtask("practice on them");
removetask("practice on them");

console.log(todolist);
*/
let array = [6,4,7,9,41,3,8]
function check(array){
    let result = [];
 /*   for(i=0;i<length(array);i++){//hna kent ghalet sagadhali ai*/
      for(i=0;i<=array.length;i++){
        if(array[i]%2==0){//hna gali madabik f condition tekhdem b ===
            result[i]="even"
        }
        else {
            result[i]="odd"
        }
    }
    return result;//hadi nsitha gali zidha
}
console.log(check(array));