// toggle menu links
const myMenu = document.querySelector('.menu-bars');
const myNav = document.querySelector('.nav-links')

myNav.style.display = 'none'
myMenu.addEventListener('click', menuTog)

function menuTog() {
  if(myNav.style.display == 'flex') {
    myNav.style.display = 'none';
  } else {
    myNav.style.display = 'flex'
  }
}

//form
const form = document.querySelector('form')
let mList = document.querySelector('#lists')


form.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault();
  
  let input = document.querySelector('#txt').value

  let li = document.createElement('li')
  li.className = `list-group-item`
  // add textnode with input value
  li.appendChild(document.createTextNode(input))

  // creating delete button
  let delBtn = document.createElement('button')
  delBtn.className = `btn btn-dark float-right`
  delBtn.appendChild(document.createTextNode('X'))
  li.appendChild(delBtn)

  // creating strike through btn
  let strikeBtn = document.createElement('button')  
  strikeBtn.className = `btn1`
  strikeBtn.appendChild(document.createTextNode('#'))
  li.appendChild(strikeBtn)

  mList.appendChild(li)
  
}

mList.addEventListener('click', removeList)

function removeList(e) {
  if(e.target.classList.contains('btn')) {
    if(confirm('are you sure?')) {
      let li = e.target.parentElement;
      mList.removeChild(li)
    }
    
  }
}

mList.addEventListener('click', striker)

function striker(e) {
 e.preventDefault();
//  the e.target...is to make sure that only when the button get clicked before it responds to the function
  if(e.target.classList.contains('btn1')) {
    let li = e.target.parentElement;
    if(li.style.textDecoration == 'line-through') {
      li.style.textDecoration = `none`
    } else {
      li.style.textDecoration = `line-through`
    }
    
    
    
  } 
  
}



// const strike = document.querySelectorAll('.fa-strikethrough')
// for(i = 0; i < strike.length; i++) {
//   strike[i].style.color = `red`
// }

// strike.addEventListener('click', strikeLetters)

// function strikeLetters(e) {
  
// }