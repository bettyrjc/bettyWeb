// primera cosa, accionar
const clickAction = document.getElementById('toggle_click_burguer');
const showMenu = document.getElementById('showMenu');

clickAction.addEventListener('click', function(){
    console.log('hola');
    showMenu.classList.toggle('active')
    // if(showMenu.classList.contains('active')){
    //     showMenu.classList.remove('active')
    //     console.log('quitando');
    // }
    // else{
    //     console.log('añadiendo');
    //     showMenu.classList.add('active')
        
    // }
})
