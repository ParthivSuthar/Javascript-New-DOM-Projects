let buttons = document.querySelectorAll('.btn')
let number = document.querySelector('#value')

let numValue = 0

buttons.forEach(function(bt) {
    bt.addEventListener('click', function(e) {
        if(bt.classList.contains('increase')) {
            numValue++
            number.style.color = "green"
        } else if(bt.classList.contains('decrease')) {
            numValue--;
            number.style.color = "red"
        } else if(bt.classList.contains('reset')) {
            numValue = 0
            number.style.color = "black"
        }


        number.textContent = numValue
    })
})





// let buttons = document.querySelectorAll('.button');
// let number = document.querySelector('.number');
// let numberValue = 0;

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         if (button.classList.contains('increase')) {
//             numberValue++;
//         } else if (button.classList.contains('decrease')) {
//             numberValue--;
//         } else if (button.classList.contains('reset')) {
//             numberValue = 0;
//         }

//         number.textContent = numberValue;
//     });
// });
