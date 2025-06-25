var bar = document.querySelector('#bar');
/*var close = document.querySelector('#close');*/
const close = document.getElementById('close');
var nav = document.querySelector('#navbar');

bar.addEventListener('click',()=>{
    nav.style.visibility='visible';
})

/*close.addEventListener('click',()=>{
    nav.style.unvisibility='unvisible';
})*/

if (close) {
    close.addEventListener('click', () => {
       nav.style.visibility='hidden';

    })

}