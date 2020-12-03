window.addEventListener('scroll', () => {
    if(window.scrollY < 100)
        document.querySelector('nav').style.boxShadow = ""
    else
        document.querySelector('nav').style.boxShadow = "0 -2px 10px 0 rgba(0,0,0,.15)"
})

let audio = document.querySelector('audio')

AOS.init();

document.querySelector('.fas').addEventListener('click', e => {
    if(e.target.classList.contains('fa-pause')){
        audio.pause();
        e.target.classList.replace('fa-pause','fa-play')
    }
    else{
        audio.play();
        e.target.classList.replace('fa-play','fa-pause')    
    }
})


document.querySelector('button').addEventListener('click', () => {
    let buttons = document.querySelectorAll('input')
    let answer = []
    let numberOfCheckedAnswers = 0
    
    for(button of buttons){
        if(button.checked){
            answer.push(button.value)
            numberOfCheckedAnswers++
        }
    }

    if(numberOfCheckedAnswers < 5)
        alert('Please answer all the questions!')
    else
        document.querySelector('#answer').innerHTML = answer.join(', ')
})