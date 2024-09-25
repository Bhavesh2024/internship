// User Registration Data
const userData = {
  fname:"",
  lname:"",
  dob:"",
  gender:"",
  phone:"",
  email:"",
  password:"",
}


// Search Modal
try{
  const searchIcon = document.querySelector('.fa-search');
  if(matchMedia('max-width:768px')){
     searchIcon.setAttribute('data-bs-toggle','modal');
  }
} catch( error){
  console.error(error)
}

// const namePattern = /^[a-zA-Z]+$/; // Only letters, no spaces, no special characters, no numbers

// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format

// const phonePattern = /^\+?[0-9]{1,15}$/; // Only numbers with an optional leading `+`, up to 15 digits

// const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
$(document).ready(function(){
  $.validator.addMethod('pattern',function(value,element,param){
    return this.optional(element) || param.test(value);
  },"Please Enter in Valid Format")
  $('#registerForm').validate({
    rules: {
        fname: { required: true,minlength:3, pattern:/^[a-zA-Z]+$/ },
        lname: { required: true,minlength:3, pattern:/^[a-zA-Z]+$/ },
        dob: { required: true },
        gender: { required: true },
        phone: { required: true,pattern:/^\+?[0-9]{1,10}$/},
        email: { required: true, email: true,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
        password: { required: true,pattern:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/,minlength:6,maxlength:16 }
    },
    messages: {
        // Only define custom messages for fields where needed
        fname:{
          pattern:"First Name is not in valid format"
        },
        lname:{
          pattern:"Last Name is not in valid format",
        },
        phone:{
          pattern:"Phone Number is not in valid format",
        },
        email: {
            required: "Please enter your email",
            email: "Please enter a valid email address",
            pattern:"Email is not in valid format"
        },
        gender: "Please select your gender", // Custom message for gender
        password:{
          pattern:"Enter Password in Valid Format"
        }
    },
    errorElement: 'div',
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      if($(element).attr('name') != 'password'){
          $(element).addClass('is-invalid');

        }else{
          $(element).addClass('is-invalid');
          $(element).closest('.password-container').find('i').hide();
        }
    },
    unhighlight: function(element) {
        $(element).removeClass('is-invalid');
        if($(element).attr('name') == 'password'){
          $(element).closest('.password-container').find('i').show();
        }
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') === 'gender') {
            error.appendTo('#gender-error');
        }else if(element.attr('name') == 'password'){ 
          error.appendTo($(element).closest('.password-container'))
      }else {
            error.insertAfter(element);
        }
    }
});
  //Toggle Password 
  $('.fa-eye').on('click',function(){

    const password = document.getElementById('password')
    const eye = document.querySelector('.fa-eye-slash');
    $(this).toggleClass('fa-eye')
    if(eye.classList.contains('fa-eye')){
      password.type="password"
    } else{
      password.type="text"
    }
    
    // $('#password').siblings().find('fa-eye-slash') ? password.type = 'text' : password.type = 'password'
  
    
    // console.log($('#password').siblings().contains('fa-eye'))
    
  })
  // Product Modal
  $('.product').each(function(){
    const $card = $(this);
    const $description = $card.find('.product-detail .product-description p');
    const descriptionLength = $description.text().length;
    if(descriptionLength > 50){
      $description.html($($description).text().slice(0,50)).append('...')
    }
  });
  // Product Card
  $('.product-card').each(function() {
    const $card = $(this); // Cache the current card
    const $description = $card.find('.product-description .description');
    const $readMore = $card.find('.read-more');
    const $remainText = $('<span class="remainText"></span>').hide(); // Hidden span for remaining text
  
    const textLength = $description.text().length;

    $description.css('display','inline')
    if(textLength > 100){
      const availText = $description.text().slice(0, 100);
      const remainText = $description.text().slice(100, textLength);

      // Set the available and remaining text
      $description.html(availText).append($remainText.text(remainText));
      
      // Show the 'Read More' link
      $readMore.show();

      // Toggle the text on 'Read More' click
      $readMore.on('click', function() {
        const isReadMore = $(this).text().includes('Read More');
        $(this).text(isReadMore ? 'Read Less' : '...Read More');
        $remainText.toggle(); // Show/hide the remaining text
      });
    } else {
      $readMore.hide(); // Hide 'Read More' if the text is short
    }
  });

  // Sidebar
  $('#menuBar').click(function(){
    // $('#sidebar').slide();
    $('#sidebar').toggle();
  })


  // Product Data Table
  $('.product table tbody tr').each(function(){
     const $row = $(this);
     const $description = $row.find('.description');
     const cuttedDescription = $description.text().slice(0,50);
     $description.html(cuttedDescription+"...")

  })
});

/* Validation Function for Register form */
const validateFormData = (event) =>{   
  const {id,name,value} = event.target;
  console.log(id ,name ,value);
  // console.log("id :"+id+"\n name : "+name+"\n value : "+value)

  const data = {
    fname:/^[a-zA-Z]+$/,
    lname:/^[a-zA-Z]+$/,
    phone:/^\+?[0-9]{1,15}$/,
    email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
  }
  if(!data[id]){
    storeData(name,value)
  }
  else if(data[id].test(value)){
    storeData(name,value)
    $(`#${id}`).css('border','1px solid green')
          name == 'password' ? $(`#${id}`).parent().siblings('.invalid-feedback').hide() : $(`#${id}`).siblings('.invalid-feedback').hide()
          return true;
        } else{
          $(`#${id}`).css('border','1px solid red')
          name == 'password' ? $(`#${id}`).parent().siblings('.invalid-feedback').show() : $(`#${id}`).siblings('.invalid-feedback').show()
          return false;
        }

  }

  // switch(name){
  //   case 'fname':
  //     case 'lname':
  //       case 'phone':
  //         case 'email':
  //     case 'password':
  //     if(namePattern.test(value) || phonePattern.test(value) || emailPattern.test(value) || passwordPattern.test(value)){
  //       $(`#${id}`).css('border','1px solid green')
  //       name == 'password' ? $(`#${id}`).parent().siblings('.invalid-feedback').hide() : $(`#${id}`).siblings('.invalid-feedback').hide()
  //     } else{
  //       $(`#${id}`).css('border','1px solid red')
  //       name == 'password' ? $(`#${id}`).parent().siblings('.invalid-feedback').show() : $(`#${id}`).siblings('.invalid-feedback').show()
  //     }
  //     storeData(name,value)
  //    break;
  //    default : storeData(name,value);
  // }

const storeData = (name,value) =>{
  switch(name){
    case 'fname' : userData.fname = value;
    break;
    case 'lname' : userData.lname = value;
    break;
    case 'dob' : userData.dob = value;
    break;
    case 'gender' : userData.gender = value;
    break;
    case 'phone' : userData.phone = value;
    break;
    case 'email' : userData.email = value;
    break;
    case 'password' : userData.password = value;
    break;
  }
}

const validateAllData = (fname,lname,dob,phone,email,password) =>{
  const namePattern = /^[a-zA-Z]+$/; // Only letters, no spaces, no special characters, no numbers

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format

const phonePattern = /^\+?[0-9]{1,15}$/; // Only numbers with an optional leading `+`, up to 15 digits

const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; // 6 to 16 characters, no spaces, no special characters

  if(namePattern.test(fname) == true && namePattern.test(lname) == true){
     if(phonePattern.test(phone) == true){
      if(emailPattern.test(email) == true){
        console.log(passwordPattern.test(password))
        if(passwordPattern.test(password) == true){
           const today = new Date();
           const birthdate = new Date(dob);
           let age = today.getFullYear() - birthdate.getFullYear();
           const difference = today.getMonth() - birthdate.getMonth();

            if(difference < 0){
                age -= 1;
              }
              console.log(age)
              if(age < 18){
                alert('You Must Adult to Use our System')
                return false;
              }
              return true;
        }
      }
     }
  }
  return false;
}
const registerUser = (event) =>{
  event.preventDefault();
  console.log(userData);
  // console.log(isValid)
  console.log(validateAllData(userData.fname,userData.lname,userData.dob,userData.phone,userData.email,userData.password))
  if(validateAllData(userData.fname,userData.lname,userData.dob,userData.phone,userData.email,userData.password)){

  }else{
    const toast = new bootstrap.Toast(document.getElementById('error'))
    toast.show()
    // alert('Please Correct Invalid Fields');
  }
}