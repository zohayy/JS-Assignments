var firstNumber=0;
var operator="";
function getFirstNumber(option){
 firstNumber=  Number(document.getElementById('textbox').value);
 operator=option;
  document.getElementById('textbox').value=''
}
function getFinalResult(){

if(firstNumber!=0&&document.getElementById('textbox').value!=''){
if(operator=='+'){
Console.log(firstNumber+ Number( document.getElementById('textbox').value))
}
else if(operator=='-'){
    console.log(firstNumber- Number( document.getElementById('textbox').value))
}
else if(operator=='*'){
    console.log(firstNumber* Number( document.getElementById('textbox').value))
}
else if(operator=='/'){
    console.log(firstNumber/Number( document.getElementById('textbox').value))
}
}
}
function setValueToTextBox(Calculate){
var result =document.getElementById('textbox').value; 
result=   result  + Calculate
console.log(result)
if(Calculate=="."){

    document.getElementById('textbox').value=parseFloat(result).toFixed(1)
}
else{
    document.getElementById('textbox').value=result

}

}
function clearValue(){
document.getElementById('textbox').value=''
firstNumber=0;
operator=0;
}

