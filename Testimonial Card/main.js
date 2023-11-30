// Local Data

const reviews = [
    {
        id: 1,
        name: "Sara",
        job: "Web Dev",
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
  
    {
        id: 2,
        name: "Riya",
        job: "App Dev",
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
        id: 3,
        name: "Jack",
        job: "DevOps",
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
        id: 4,
        name: "Joy",
        job: "ML Engineer",
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    }
]


// Select Items

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const nextButton = document.querySelector('.next-btn')
const prevButton = document.querySelector('.prev-btn')
const randomButton = document.querySelector('.random-btn')


// set starting item

let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
})

// SHow Person based on item

function showPerson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// Click on next Button

nextButton.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }

    showPerson(currentItem)
})

// Click on Prev Button

prevButton.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }

    showPerson(currentItem)
})


// Random Button

randomButton.addEventListener('click', function(){
    console.log("Hello");
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})


