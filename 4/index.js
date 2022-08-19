
function AddUser(name,lname,value1,value2,email,value3){
   this.firstName=name;
   this.lastName=lname;
   this.age=value1;
    this.phonenumber=value2;
    this.mail=email;
    this.geneder=value3;

}
const user= new AddUser("maryam","karamad","28","09162780255","maryamkaramad73@gmail.com","Female");
console.log(`firstName: ${user.firstName}
lastName: ${user.lastName} 
age: ${user.age}
phonenumber : ${user.phonenumber}
email: ${user.email}
geneder : ${user.geneder}`);


