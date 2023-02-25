const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const table = ['Tak 😁 ', 'Nie 😥 ', 'Może... 😅', 'Nie chcesz znać odpowiedzi... 🤐 ', 'Weź nie pytaj tylko polej 🤪 ', 'Juź niedługo się dowiesz 😉 ', 'Nie masz co robić tylko mną trząść? 😤 ', 'Spytaj się tego za tobą 😱', 'Wina Tuska 🐱']

const check = () => {
    if(input.value !== '' && input.value.includes('?')){
        setTimeout(startAnimation, 1000)
        setTimeout(yourAnswer, 2000)
        error.textContent = ''
    }else{
        error.textContent = 'Musisz wpisać pytanie lub na końcu nie postawiłeś  ?'
        answer.textContent = ''
    }
}
const startAnimation = () => {
    img.classList.add('shake-animation')

}
const yourAnswer = () => {
    answer.innerHTML = `<span>Odpowiedź:</span> ${table[Math.floor(Math.random() * table.length)]}`
    img.classList.remove('shake-animation')
}
const enterKeyCheck = e =>{
    if(e.key === 'Enter'){
        check()
    }
}

img.addEventListener('click', check)
input.addEventListener('keyup',enterKeyCheck)
