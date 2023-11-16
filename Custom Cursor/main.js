let mainScreen = document.querySelector('#main')
let cursor = document.querySelector('.cursor')

mainScreen.addEventListener('mousemove', function(e) {
    cursor.style.left = e.x+"px"
    cursor.style.top = e.y+"px"
})