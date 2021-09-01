const quiz = [
    {
        pytanie: 'Skąd pochodzi Beagle?',
        a: 'Norwegia',
        b: 'Wielka Brytania',
        c: 'Dania',
        d: 'Szwecja',
        correct: 'b2'
    }, {
        pytanie: 'Gdzie pierwszy raz zaprezentowano Owczarka Szkockiego na której wystawie?',
        a: 'Birmingham',
        b: 'Sopot',
        c: 'Sokobanja',
        d: 'Varaždin',
        correct: 'a1'
    }, {
        pytanie: 'W ilu kolorach występuje owczarek szkocki uznawanych przez FCI?',
        a: '3',
        b: '4',
        c: '5',
        d: '6',
        correct: 'a1'
    }, {
        pytanie: 'Jakie przypadłości chorobowe posiada Labrador?',
        a: 'choroby serca',
        b: 'drgawki',
        c: 'cukrzyca',
        d: 'wzmożone pragnienie',
        correct: 'a1'
    },
]
const pytanie = document.getElementById('pytanie')
const odpowiedz = document.querySelectorAll('.answer')
const a1t = document.getElementById('a1t')
const b2t = document.getElementById('b2t')
const c3t = document.getElementById('c3t')
const d4t = document.getElementById('d4t')
const a1 = document.getElementById('a1').value
const b2 = document.getElementById('b2').value
const c3 = document.getElementById('c3').value
const d4 = document.getElementById('d4').value
const qizu = document.getElementById('quiz')
const okbtn = document.getElementById('git')
let ktore = 0
let wynik = 0

Quizf()

function Quizf() {
    odznacz()
    const obecny = quiz [ktore]
    pytanie.innerText = obecny.pytanie
    a1t.innerText = obecny.a
    b2t.innerText = obecny.b
    c3t.innerText = obecny.c
    d4t.innerText = obecny.d

}
function wybrany() {
    let odpow = undefined
    
    odpowiedz.forEach((odpi) =>{
        if(odpi.checked){
            odpow = odpi.id
        }
    })
    return odpow
}
function odznacz (){
    odpowiedz.forEach((odpi) =>{
        odpi.checked = false    
    })
}
okbtn.addEventListener('click',() =>{
    const odpow = wybrany()
    console.log(odpow)
    if(odpow) {
        
    if(ktore<quiz.length && odpow === quiz[ktore].correct)
    {
        wynik = wynik + 1
    }
    ktore = ktore + 1
    }
    if(ktore<quiz.length)
    {
    Quizf()
    }
    else{
        qizu.innerHTML= `<h2>${wynik}/${quiz.length}</h2>
        <button onclick="window.location.reload()">Odswiez</button>
        `

    }
})