let arr = [
    {
        dp: "/img2.png",
        story: "/london.png"
    },

    {
        dp: "/newyork.png",
        story: "/washington.png"
    },

    {
        dp: "/img5.png",
        story: "/img6.png"
    }
]

let storyContainer = document.querySelector('.story-container')
let fullScreen = document.querySelector('.full-screen')
let clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storyContainer.innerHTML = clutter

storyContainer.addEventListener('click', function(e){
    fullScreen.style.display = 'block'
    fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`
    

    setTimeout(function(){
        fullScreen.style.display = 'none'
    },3000)
})

