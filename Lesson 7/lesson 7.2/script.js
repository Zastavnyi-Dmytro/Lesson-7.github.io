const keys = document.querySelectorAll('.key');
const display = document.querySelector('textarea');
const row = document.querySelectorAll('.row div');
const caps = document.querySelector('.capslock');
const rowUp = document.querySelectorAll('div.letter')

// tabulation
display.addEventListener('keydown', function(event){
    if(event.key === 'Tab'){
        event.preventDefault();
        display.setRangeText(
            '  ',
            display.selectionStart,
            display.selectionStart,
            'end'
        )
    }
})
// press key
display.addEventListener('keydown', function(){
    for (let i = 0; i < row.length; i++) {
        if (event.key === row[i].innerHTML) {
            row[i].style.backgroundColor = '#9b9b9b';
            row[i].style.color = 'white';
        }
    }
})
// unpress key
display.addEventListener('keyup', function(){
    for (let i = 0; i < row.length; i++) {
        if (event.key === row[i].innerHTML) {
            row[i].style.backgroundColor = '#eee';
            row[i].style.color = 'black';
        }
    }
})
// CapsLock
display.addEventListener('keydown', function(){
    if(event.getModifierState("CapsLock")){
        caps.style.backgroundColor = '#9b9b9b';
        for(let i = 0; i < rowUp.length; i++){
            rowUp[i].style.textTransform = 'uppercase';
        }
        
    }
    else{
        caps.style.backgroundColor = '#eee';
        for(let i = 0; i < rowUp.length; i++){
            rowUp[i].style.textTransform = 'lowercase'
        }
    }
})

console.log(rowUp)







