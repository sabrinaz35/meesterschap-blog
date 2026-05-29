console.log('oh hello')

// Setup hulp mouse animatie https://www.youtube.com/watch?v=vJI4RdL1dz8
document.addEventListener('mousemove', function(event){
    let div = document.createElement('div')

    div.classList.add('mouse-div');

    // console.log(div)
    

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let xPosition = event.clientX + (Math.random() * 50 - 10)
    let yPosition = event.clientY + (Math.random() * 20 - 10)
    
    // Laat de div je mous volgen
    div.style.translate = `${xPosition}px ${yPosition}px`
    document.body.appendChild(div);



    setTimeout(() => {
        document.body.removeChild(div)
        }
        ,500)
})