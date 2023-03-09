let rem = document.getElementsByClassName('active')
color = document.querySelector('.color').addEventListener('click', function(){
    document.querySelector('.img-popup').classList.remove('active')
   document.querySelector('.color-popup').classList.add('active')
})
image = document.querySelector('.img').addEventListener('click', function(){
    document.querySelector('.color-popup').classList.remove('active')
    document.querySelector('.img-popup').classList.add('active')
 })
close = document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.img-popup').classList.remove('active')
    document.querySelector('.color-popup').classList.remove('active')
})
