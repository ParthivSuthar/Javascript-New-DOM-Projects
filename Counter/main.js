let buttons = document.querySelectorAll('.btn')
let value = document.querySelector('#value')
let count = 0

buttons.forEach(function(bt){
    bt.addEventListener('click', function(e){
        if(bt.classList.contains('increase')) {
            value.style.color = 'green'
            count++
        } else if(bt.classList.contains('decrease')) {
            value.style.color = 'red'
            count--;
        } else if(bt.classList.contains('reset')) {
            value.style.color = 'black'
            count = 0;
        }

        value.textContent = count
    })
})