const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const searchInput = document.getElementById('search');
const searchResult = document.querySelector('.search-result');
const dataList = [
  'Bhavesh',
  'Het',
  'Darshan',
  'Mansukh',
  'Hitesh',
  'Ayush',
  'Suresh',
  'Mahesh',
  'Jayesh',
  'Deep',
  'Dhruv',
  'Ashok',
  'Piyush',
  'Akshay',
  'Ritesh',
  'Mitesh',
  'Satish'
]
body.addEventListener('keypress',(event) =>{
  if(event.key == '/'){
    event.preventDefault();
    modal.style.display="flex";
    searchInput.focus();
  }
})

const handleSearch = (event) =>{
  event.preventDefault();
  console.log('hello')
}

const searchData = (event) =>{
  
  const searchValue = searchInput.value.toLowerCase();
  const result = dataList.filter(name => name.toLowerCase().includes(searchValue))
  if(searchValue == ""){
    searchResult.innerHTML = "No Data Found"
  }else{
    const matches = result.map(name=>`<div>${name}</div>`)
   searchResult.innerHTML = matches.join('') || "No Data Found"
  }
  return ""
}

const checkIsEmpty = (event) =>{
  if(event.target.value ==""){
    console.log('i am blank')
  }
}
// const checkMatchedData = (name) =>{
//   return name.test(searchInput)
// }