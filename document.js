 


function ageCal (name, age){

    let date = new Date();
    age = date.getFullYear() - age;

     let agestatus = CheckAgeStatus(age);

return `
              <p class="alert alert-${agestatus.status}">Hi ${name}, Your age is ${age} Years are ${agestatus.name} </p>
         `



};


function CheckAgeStatus(age){

if(age > 0 && age < 10){
    return{  
        name : 'babu',
        status : 'success'   
    };
}else if (age >10 && age <18){
    return{
        name : 'kisor',
        status : 'info'
    };
}else if (age >18 && age < 35){
    return{
        name : 'togboge jubok ',
        status : 'warning'
    };
}else if (age >35 && age < 55){
    return{
        name : 'togboge boyosko ',
        status : 'primary'
    };
}else if (age >55 && age < 140){
    return{
        name : 'briddo ',
        status : 'danger'
    };
}else{
    return 'jin\bhoot';
}

}