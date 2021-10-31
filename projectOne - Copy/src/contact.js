const username=document.getElementById('username');
const email=document.getElementById('email');
const textArea=document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    localStorage.setItem('name',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('message',textArea.value);
});


 


