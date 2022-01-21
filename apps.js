


//  age calculator 

const check_button = document.querySelector('#check_button');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');
const h2 = document.querySelector('h2');

 
check_button.addEventListener('click', () => {



     if (name.value == "" || year.value == "") {

          
          h2.className = ('text-danger');
          
          result.innerHTML = '<p class="alert alert-danger">Hi, all fields are required*</p>';
     }else{
               result.innerHTML = ageCal(name.value, year.value);
               name.value = '';
               year.value = '';
               h2.className = ('text-success');   
}
   
});




// <!-- currency start -->

 

