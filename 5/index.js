alert("bmi");
let w = prompt("وزن خود را وارد کنید");
let h = prompt("قد خود را وارد کنید");
const Rbmi =(w,h) =>{
let bmi = w / (h * h);
if(bmi<18.5 ){
    alert( bmi + "underweight");
}
else if( 18.5<= bmi && bmi<25){
    alert(bmi + "normal");
}
else if( 25<=bmi && bmi<30){
   alert(bmi + "overweight");
}
else if( 30<= bmi){
    alert(bmi + "obese");
}}
Rbmi(prompt("وزن خود را وارد کنید"),prompt("قد خود را وارد کنید"));
