//Selectors
document.querySelector('form').addEventListener('submit',handleSubmitForm)
document.querySelector('ul').addEventListener('click',handleClickDeleteOrCheck)

//Event Handler
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        if(input.value.length > 50){
            alert("input lenth should be less")
            throw e
        }
       addTodo(input.value);
    }
    input.value = ''
}


//Helpers
function addTodo(todo){
    let ul  =document.querySelector('ul');
    let li = document.createElement('li')
    
    li.innerHTML = `
      <span class="todo-item">${todo}</span>
       <button id="1" name="checkButton"><i class="fas fa-check-square"></i></button> 
          <button id="2" name="deleteButton"><i class="fas fa-trash"></i></button> 
    `;
   
    li.classList.add('todo-list-item')
    ul.appendChild(li);
}

document.getElementById("clearAll").onclick =  function() {
    let ul = document.querySelector('ul');
    ul.innerHTML = ``;
}


function handleClickDeleteOrCheck(e){
    console.log(e);
    if(e.target.name == 'checkButton')
       checkTodo(e);
   
    if (e.target.name == 'deleteButton')
        deleteTodo(e);

} 

function checkTodo(e){
    let item = e.target.parentNode
    if(item.style.textDecoration == 'line-through'){
       item.style.textDecoration = 'none';
        item.innerText +=  " done"
    }else{ 
       item.style.textDecoration  = 'line-through'
        item.innerText += ' done'
        console.log(item.value);

    }
}

function deleteTodo(e){
     let item = e.target.parentNode;
    // item.classList.add('todo-list-ite-fall')
     item.remove();
}