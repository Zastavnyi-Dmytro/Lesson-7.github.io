let className = document.querySelector('body').className
document.querySelector('.color-popup').addEventListener('click', function(){
    if(event.target.classList.contains('orient-red')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('orient-red')
    }
    if(event.target.classList.contains('grey-white')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('grey-white')
    }
    if(event.target.classList.contains('light-ivory')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('light-ivory')
    }
    if(event.target.classList.contains('chrome-green')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('chrome-green')
    }
    if(event.target.classList.contains('opal-green')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('opal-green')
    }
    if(event.target.classList.contains('distant-blue')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('distant-blue')
    }
    if(event.target.classList.contains('pale-brown')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('pale-brown')
    }
    if(event.target.classList.contains('yellow-orange')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('yellow-orange')
    }
    if(event.target.classList.contains('turquoise-blue')){
        if(className){
            document.querySelector('body').removeAttribute('class')
        }
        document.querySelector('body').classList.toggle('turquoise-blue')
    }
})