alert("جمع مقسوم علیه های یک عدد ");
const SumOfDivisors = (number) => {
    let sum=0;
    let i=1;
    while(i<number){
        
        if(number%i==0) sum=sum+i;
        i++;
    }
    (sum==number)? alert("yse"): alert("no");
}
SumOfDivisors(prompt("عدد را وارد کنید"));