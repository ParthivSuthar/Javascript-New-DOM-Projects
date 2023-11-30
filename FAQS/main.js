const questions = document.querySelectorAll('.question')

questions.forEach(function(que) {
    const button = que.querySelector('.question-btn')

    button.addEventListener('click', function() {
        questions.forEach(function(item) {
            if(item !== que) {
                item.classList.remove('show-text')
            }
        })

        que.classList.add('show-text')
    })
})