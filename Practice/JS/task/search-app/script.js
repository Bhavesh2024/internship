const validateData = (event) =>{
  const {name,value} = event.target;
  // console.log(name);
  // console.log(value);
  console.log(isValidData(name,value));
}

const isValidData = (name,value) =>{
  const namePattern = /([a-zA-Z]+)/g;
  const emailPattern = '';
  const phonePattern = '';
  const passwordPattern = '';
  console.log()
  switch(name){
    case 'fname' || 'lname' : return namePattern.test(value); 
  }
}