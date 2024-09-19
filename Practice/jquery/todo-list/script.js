var count = 1;
$(document).ready(function(){
  $('#addTodoBtn').click(function(){
     let addTodoItem = `<li class="todo-item" id="task${count}"><input type='checkbox' id='taskCheckBox${count}'> <input type="text" id="taskName${count}" name="todo"> <i class="fa-solid fa-xmark todo-delete" id='deleteTodo${count}'></i></li>`
    //  addTodoItem(count)
     $('#taskContainer').append(addTodoItem)
     $(`#deleteTodo${count}`).click(function(){
      console.log($(this).parent());
      $(this).parent().hide();
     })

     $(`#taskCheckBox${count}`).click(function(){
       $(this).siblings('input').css('text-decoration','line-through');
      //  console.log($(this).val())
       if($(this).val() == 'on'){
         $('#completedTaskContainer').append($(this).parent())
        $(this).val('off')
       }else{
        $('#completedTaskContainer').remove($(this));
        $(this).val('on')
       $(this).siblings('input').css('text-decoration','none');
        $('#taskContainer').append($(this).parent());
       }
      //  console.log($(this).val())

     })
     count = count + 1;
     console.log(addTodoItem)
   })

   $('#search').on('keyup',function(){
      var value = $(this).val().toLowerCase();
     $('#taskContainer li *').filter(function(){
      // $(this).toggle($(this).val().toLowerCase().indexOf(value) < 0).parent().hide()
      $(this).toggle($(this).val().toLowerCase().indexOf(value) > -1).parent().show()
     })
   })

   $('#deleteAllBtn').click(function(){
    $('#taskContainer *').hide();
    count = 1;
   })

   $('#resetBtn').click(function(){
    $('#taskContainer *').hide();
    count = 1;
    $('#title').val("")
   })
})
// const addTodoItem = (count) => {
//   // Create new elements
//   const li = document.createElement('li');
//   const input = document.createElement('input');

//   // Set attributes directly
//   input.id = `taskName${count+1}`;
//   li.classList.add('todo-item');
//   li.id = `task${count+1}`;

//   // Append input to li
//   li.appendChild(input);
  
//   console.log(li)
//   return li;
// };
