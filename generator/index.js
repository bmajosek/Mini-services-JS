const haslo = document.getElementById ('haslo')
const kopiuj = document.getElementById ('kopiuj')
const dl = document.getElementById ('dl')
const upper = document.getElementById ('upper')
const lower = document.getElementById ('lower')
const number = document.getElementById ('number')
const symbol = document.getElementById ('symbol')
const generuj = document.getElementById ('generuj')

const duze = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
const male = 'abcdefghijklmnopqrstuwxyz'
const liczby = '0123456789'
const symbole = '!@#$%^&*()_+-='

function duzalitera() {
    return duze[Math.floor(Math.random()*duze.length)]
}
function malalitera() {
    return male[Math.floor(Math.random()*male.length)]
}
function numer() {
    return liczby[Math.floor(Math.random()*liczby.length)]
}
function symbolf() {
    return symbole[Math.floor(Math.random()*symbole.length)]
}

function generujznak(){
    const tab = []
    if(upper.checked){
        tab.push(duzalitera())
    }
    if(lower.checked){
        tab.push(malalitera())
    }
    if(number.checked){
        tab.push(numer())
    }
    if(symbol.checked){
        tab.push(symbolf())
    }
    return tab[Math.floor(Math.random()*tab.length)]
}
function otrzymajhaslo() {
    let hasuo = ''
    const dlugosc = dl.value
    for(let i = 0; i<dlugosc;i++){
        const znak = generujznak()
        hasuo += znak
    }

    haslo.innerText = hasuo
}
kopiuj.addEventListener("click",() =>{
    const textarea = document.createElement('textarea');
    const docelowe = haslo.innerText;
    if(!docelowe) {
        return;
    }
    textarea.value = docelowe;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    
})
generuj.addEventListener('click', otrzymajhaslo)