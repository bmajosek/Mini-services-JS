const git = document.getElementById('git')
git.addEventListener('click',() =>{
    const data = document.getElementById('data').value
    const dnie = document.getElementById('dni')
    const godzine = document.getElementById('godziny')
    const minute = document.getElementById('minuty')
    const sekunde = document.getElementById('sekundy')
    const urodziny = data || '02 Apr 2022'
    function odliczanie (){
        console.log(urodziny)
        const urodzinydata = new Date(urodziny)
        const teraz = new Date()
        const sekundy = (urodzinydata - teraz) / 1000
        const dni = Math.floor(sekundy/3600/24) 
        const godziny = Math.floor(sekundy/3600) % 24
        const minuty = Math.floor(sekundy/60) % 60 
        const sekund = Math.floor(sekundy) % 60
        // console.log(dni,godziny,sekund)

        dnie.innerHTML = dni
        godzine.innerHTML = godziny
        minute.innerHTML = minuty
        sekunde.innerHTML = sekund  
        // console.log(teraz)
        // console.log(urodzinydata) 

    }

    odliczanie()

    setInterval(odliczanie,1000)
})
const odswiez = document.getElementById('odswiez')
odswiez.addEventListener('click',() =>{
    window.location.reload()
})
