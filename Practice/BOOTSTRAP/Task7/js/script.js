const menuIcon = document.querySelector('.fa-bars');
const menuList = document.getElementById("menuList");
const footerIcon = document.querySelectorAll('.footer > .container-fluid > .row > .col-2')
const socIcon = document.querySelectorAll('.footer-icon:only-child')
menuIcon.addEventListener('click',() =>{
  menuList.classList.toggle('show');
  console.log('hello')
})
console.log(footerIcon)

footerIcon.forEach((value,index) =>{
  value.addEventListener('mouseover',()=>{
   console.log(socIcon[index])
   socIcon[index].style=""
  })
})