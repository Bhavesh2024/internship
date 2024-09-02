const menubar = document.getElementById('menubar');
const menuList = document.querySelector('.menu-list');
// const barIcon = document.querySelector('.fa-bars')
menubar.addEventListener('click',() =>{
    menuList.classList.toggle('hide');
    menubar.classList.toggle('fa-xmark');
    
    
})