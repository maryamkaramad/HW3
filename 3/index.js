alert("امکان ساخت مثلث قائم الزاویه")
const RightTriangle= (num1,num2,num3) =>{
let c,b,a;
if ( num1>num2 && num1>num3) {
     c=num1;
     b= num2;
    a= num3;
}
else if ( num2>num1 && num2>num3) {
     c=num2;
     b= num1;
     a= num3;

}
else if ( num3>num2 && num3>num1){
     c=num3;
     b= num2;
     a= num1;
}
 (c*c == a*a+b*b)? alert("yse"): alert("no");
}
RightTriangle(prompt("عدد اول"),prompt("عدد دوم"),prompt("عدد سوم"));












