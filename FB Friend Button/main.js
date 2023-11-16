let btn = document.querySelector('#add')
let isStatus = document.querySelector('h5')
let value = 0

btn.addEventListener('click', function(){
    if(value === 0) {
        isStatus.innerHTML = 'Friends'
        isStatus.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        value = 1
    } else {
        isStatus.innerHTML = 'Stranger'
        isStatus.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        value = 0
    }
})