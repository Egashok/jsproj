const toDoItem= document.getElementsByClassName('items')[0]
const input = document.getElementById('input')
const trash=document.getElementById('trash')


input.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        addItem()
    }
})

function addItem(){
    
    let    divParent=document.createElement('div')

    let checkIcon=document.createElement('img')
    let trashIcon=document.createElement('img')
    divParent.innerHTML='<div class=item" >'+input.value+'</div>'
    divParent.appendChild(checkIcon)
    divParent.appendChild(trashIcon)
    checkIcon.src='../img/check.svg'
    trashIcon.src='../img/trash.svg'
    checkIcon.className='check'
    trashIcon.className='trash'



   
   

   

    trashIcon.addEventListener('click',function(){
        divParent.remove()
    })
    checkIcon.addEventListener('click',function(){
        divParent.className="item active"
        checkIcon.remove()
    })

    divParent.className="item"
    
   
  
    toDoItem.appendChild(divParent)
    input.value='   '
}
