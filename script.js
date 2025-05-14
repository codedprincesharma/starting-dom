let h = document.querySelector('h2')
let btn = document.querySelector('button')

let check = 0

btn.addEventListener('click', function () {
  if (check == 0) {
    h.innerHTML = "Friend"
    h.style.color = 'green'
    btn.innerHTML = 'Remove Friend'
    check = 1
  } else {
    h.innerHTML = "Stranger"
    h.style.color = 'black'
    btn.innerHTML = 'Add Friend'
    check = 0
  }

})

