const chatBox = document.getElementById('chatbox');
const message = document.getElementById('message');
const button = document.querySelector('.submit');
const body = document.querySelector('body');
const form = document.querySelector('form');
var count = 0;
var messages = []; 

body.addEventListener('keypress',(event)=>{
    if(event.key == '/'){
      event.preventDefault();
      
      message.focus();
    }
   
})


const handleChat = (event) =>{
    event.preventDefault();
    const chatMessage = message.value;
    console.log(chatMessage) 
    
    if(createMessage(event,count,chatMessage)){

      count = count + 1;
      messages.push(chatMessage);
      message.value="";
    }
    console.log(count)
    console.log(messages)
}

const createMessage = (event,count,message) =>{
  const messageId = messages.length.toString()
  const messageClass = count % 2 == 0 ? 'message-right' : 'message-left';
  const messageDiv = document.createElement('div');
  messageDiv.setAttribute('class',messageClass);
  messageDiv.setAttribute('id',messageId)
  messageDiv.textContent = message;
  if(count % 2 == 0){
    messageDiv.onclick = () => toggleModal(messageId);
    messageDiv.appendChild(createModal(messageId))
  }
  chatBox.appendChild(messageDiv);
  console.log(messageDiv)
  console.log(event.currentTarget);
  return true;
}

const deleteMessage = (index) =>{
  const message = document.getElementById(`${index}`);
  chatBox.removeChild(message);
}

const createModal = (index) =>{
  const modal = document.createElement('div');
  modal.setAttribute('class','delete-modal hidden');
  modal.setAttribute('id',`modal-${index}`);
  modal.appendChild(createDeleteButton(index));
  return modal;
}

const createDeleteButton = (index) =>{
  const button = document.createElement('button');
  const span = createDeleteIconElement();
  console.log(span)
  button.setAttribute('class','delete');
  button.onclick = () => deleteMessage(index);
  button.textContent = 'Delete'
  button.appendChild(span);
  return button;
}

const createDeleteIconElement = () =>{
  const span = document.createElement('span');
  span.setAttribute('class','material-symbols-outlined');
  span.textContent = 'delete';
  return span;
}

const toggleModal = (index) =>{
  document.getElementById(`modal-${index}`).classList.toggle('hidden');
}