alert("تعیین نمره بر اساس شرایط");
// let number=prompt("نمره را وارد کنید");
// let day=prompt("روزهای سفر را وارد کنید");
const Score=(day,number) =>{
if (day==0){
    alert("20");
}
else if(day==7){
    alert(number);
}
else if(day<7 || day>7){
for (let i=1; i<=day; i++){
    number=number-1;


(number<0)? alert("0"): alert(number);}}}
Score(prompt("نمره را ورد کنید"),prompt("روزهای سفر را وارد کنید"));
