document.addEventListener("DOMContentLoaded", function(){
    const todoform = document.querySelector(".todo-form")
    const todoinput = document.querySelector(".todo-input")
    const todoSubmit = document.querySelector(".todo-submit")
    const todolist= document.querySelector(".todo-list")
    let editMode=false
    let editItem=null

    todoform.addEventListener("submit", function(event){
        event.preventDefault()
        const todotext= todoinput.value.trim()
        console.log(todotext)
        if(todotext!==""){
           
           if(editMode){
            editItem.firstChild =todotext
            todoSubmit.innerText="add"
            editMode=false
            editItem=null
           }
           else{
            //add todos
            addTodoItem(todotext)
           }
            

            //clean 
            todoinput.value=""
        }
        else{
            alert("please enter  a valid task")
        }
        
    })
    todolist.addEventListener("click", function(event){
        const target= event.target;
        if(target.tagName=="BUTTON"){
            const todoItem= target.parentNode;
            if(target.innerText=='☠️'){
                todoItem.remove()  //Delete an item

            }
            else if(target.innerText=="✏️"){
               editMode=true
               editItem=todoItem
               todoSubmit.innerText='Edit'
               todoinput.value= todoItem.firstChild.textContent
               todoinput.focus()
            }
        }

    })

     function addTodoItem(todotext){

        //create elements needed 
        const todoItem=document.createElement("li")
        const editButton= document.createElement("button")
        const deleteButton=document.createElement("button")
         
        //provide there values
        todoItem.innerHTML=`<span>${todotext}</span>`
        editButton.innerText=`✏️`
        deleteButton.innerText=`☠️`


        //join them
        todoItem.appendChild(editButton)
        todoItem.appendChild(deleteButton)

        //put main item to Dom
        todolist.appendChild(todoItem)
     }
   
})