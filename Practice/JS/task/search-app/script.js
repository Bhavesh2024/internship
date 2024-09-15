const body = document.querySelector('body');
const data = document.querySelectorAll('.data');
const container = document.querySelector('.container');
const dataTable = document.querySelector('.user-data table');
const thead = document.querySelector('.search-result table thead');
const tbody = document.querySelector('.search-result table tbody');
const userData = {
	'id':0,
	'fname' : "",
	'lname' : "",
	'age' :0,
	'phone':"",
	'email':"",
	'password':""
}

dataTable.style="display:none"
thead.style = "display:none";
// body.removeChild(container);
window.addEventListener('DOMContentLoaded',()=>{
	const userData = getUserData();
	console.log(userData);
	if(userData.length == 0){
		body.style.display="block"
	} else{
		const email = prompt('Enter Username : ');
		userData.forEach(value =>{

			if(email == value.email){
				const password = prompt('Enter Password : ');
				if(password == value.password){
					body.style.display="block"
					alert("Login Successfully");
				} else{
					window.location.href = 'index.html';
				}
			} else{
				 window.location.href="index.html";
			}
		})
	}
})
// body.addEventListener('onload',(event)=>{
// 	event.preventDefault();
// })
const setUserValidData = (name, value) => {
	// Check if the name is a valid key in userData
	if (userData.hasOwnProperty(name)) {
		userData[name] = value;
	}
};

/* Validating Form Data */
const validateData = (event) => {
	const { name, value,id,placeholder } = event.target;
	
	// console.log(value)
		if(!isValidData(name,value)){
				console.log(placeholder + " not in valid format")
		}else{
			setUserValidData(name,value);
		}


};


const isValidData = (name, value) => {
	const namePattern = /^[a-zA-Z]+$/;
	const emailPattern = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/ ;
	const phonePattern = /^\+?[1-9]\d{1,14}([\s.-]?\d{1,13})*$/
	const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	// console.log(value);
	if(name != 'age'){

		switch (name) {
			case "fname":
			case "lname":
				return namePattern.test(value);
	
			case "phone":
				return phonePattern.test(value);
			
			case "email": return emailPattern.test(value);
			case "password":return passwordPattern.test(value);
			
			default: return false;
			}
	}
	return true;
};

const showData = (data) => {
	const { id, fname, lname, age, phone, email, password } = userData;

	[id, `${fname} ${lname}`, age, phone, email, password].forEach((value, index) => {
			if (data[index]) {
					data[index].innerHTML = value;
					dataTable.style="display:block";
			}
	});
}

/* Handling Form While Submitting */

const storeData = (event) =>{

	event.preventDefault();
	// console.log(userData)
	// setCookie('','')
	// console.log(getCookie('myname'));
	const prefix = "USA"
	userData.id = generateUserId(prefix);
	setCookie(userData.id,JSON.stringify(userData));
	console.log(getCookie(userData.id))
	showData(data)
}
// document.cookie="USA1= "
console.log(document.cookie);
const setCookie = (name,value,days) =>{
		let expires = "";
		if(days){
			const date = new Date();

			expires = date.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));

		}

		document.cookie = `${name}=${value};${expires};`;
}

const getCookie = (name) => {
	const searchName = name + "=";
	const cookies = document.cookie.split(';');

	for (let cookie of cookies) {
			// Trim leading spaces
			let c = cookie.trim();

			if (c.indexOf(searchName) === 0) {
					return c.substring(searchName.length);
			}
	}
	return null;
}


const generateUserId = (prefix) =>{
		// const prefix = 'USA';
    // if(getCookie('myCookie4')){
		// 		console.log('cookie available')
		// } else{
		// 		console.log('cookie not available');
		// }
		let count = 1;
		let id = `${prefix}${count}`;
		while(getCookie(`${prefix}${count}`)){
			id = `${prefix}${count+1}`;
			console.log(id);
				count++;
		}
		return id;
}

const getUserData = () =>{
	const allUsers = [];
	const cookies = document.cookie.split(';');
	if(!cookies.includes('')){
		for(let i of cookies){
			let name = i.split('=')
			let data = JSON.parse(name[1]);
			allUsers.push(data);
			//  console.log(JSON.parse(name[1]));	
		}
	}
	// console.log(allUsers);
	return allUsers;
}


const searchData = (event) => {
	const searchValue = event.target.value.toLowerCase();
	const userData = getUserData();

	// Filter user data based on searchValue
	const resultData = userData.filter(data => 
			data.id.includes(searchValue) ||
			data.fname.toLowerCase().includes(searchValue) ||
			data.lname.toLowerCase().includes(searchValue) ||
			String(data.age).includes(searchValue) ||
			data.phone.includes(searchValue) ||
			data.email.toLowerCase().includes(searchValue)
	);

	// Generate table rows based on filtered data
	const matches = resultData.map(data => addMatchedDataRow(data)).join('');
	if(searchValue == ""){
		tbody.innerHTML = "<tr><td colspan='6' style='text-align:center'>No Data Found</td></tr>"; // Assuming 6 columns in the table

	}
	else if (resultData.length === 0 && searchValue !== "") {
			tbody.innerHTML = "<tr><td colspan='6'>No Data Found</td></tr>"; // Assuming 6 columns in the table
	} else {
		  thead.style.display="block"
			tbody.innerHTML = matches;
	}
};

const addMatchedDataRow = (data) => {
	// // Create a new table row
	// const tableRow = document.createElement('tr');

	// // Get the values from the data object
	// const values = Object.values(data);
	// // Iterate over the values and create a table cell for each one
	// values.forEach((value,index) => {
	// 		// Create a new table cell
	// 		const tableData = document.createElement('td');
	// 		// Set the text content of the table cell
	// 		if(index > 0 && index < 3){
	// 			if(index != 1){
	// 				tableData.textContent = data.fname + " " + data.lname;
	// 				tableRow.appendChild(tableData);
	// 			}
	// 		}else{
	// 			tableData.textContent = value;
	// 			tableRow.appendChild(tableData);
	// 		}
	// 		// Append the table cell to the table row
	// });

	// console.log(tableRow)
	// // Return the table row
	// return tableRow;
	const values = Object.values(data);
	let tableData = "";
	values.map((value,index) =>{
		if(index > 0 && index < 3){
			if(index != 1){
				let fullname = data.fname + " "+ data.lname;
				tableData = tableData + `<td>${fullname}</td>`
			}
		}else{

			tableData = tableData + `<td>${value}</td>`
		}
	})
	return `
		<tr>
			 ${tableData}
		</tr>
	`
};


const togglePassword = (event) =>{
	const password = document.getElementById('password');
	const icon = document.querySelector('.icon');
	if(icon.classList.contains('fa-eye')){
		password.type='text'
	} else{
		password.type='password';
	}
	icon.classList.toggle('fa-eye')
}

body.addEventListener('keypress',(event)=>{
	
	if(event.key == '/'){
		event.preventDefault();
			  document.getElementById('search').focus();
		 }
})

// getUserData(document.cookie)
// console.log(generateUserId());
// setCookie('myCookie1','1');
// setCookie('myCookie2','2');
// setCookie('myCookie4','4');
// generateUserId();
// console.log(getCookie('myCookie1'));