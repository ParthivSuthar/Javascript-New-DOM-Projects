let elem = document.querySelectorAll('.element')

elem.forEach(function(val) {
    val.addEventListener('mouseenter', function(){
        val.childNodes[3].style.opacity = '1'
    })

    val.addEventListener('mouseleave', function(){
        val.childNodes[3].style.opacity = '0'
    })

    val.addEventListener('mousemove', function(e) {
        val.childNodes[3].style.left = e.x+"px"
    })
})











// -------------- For only one ELement ---------------///
// let element1 = document.querySelector('#element1')
// let elementImage = document.querySelector('#element1 img')

// element1.addEventListener('mousemove', function(e){
//     elementImage.style.left = e.x+"px"
//     elementImage.style.top = e.y+"px"
// })

// element1.addEventListener('mouseenter', function(e){
//     elementImage.style.opacity = '1'
// })

// element1.addEventListener('mouseleave', function(e){
//     elementImage.style.opacity = '0'
// })