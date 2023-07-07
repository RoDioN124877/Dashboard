const exit = document.getElementById('exit_btn');
const hm = document.getElementById('mane');
const open_btn = document.getElementById('open_btn')

    hm.style.width = "0"
   hm.style.display = "none";

exit.onclick = function(){
    hm.style.width = "0"
    setTimeout(() => hm.style.display = "none" , 900);
}
open_btn.onclick = function(){
    hm.style.display = "inline-flex";
    setTimeout(() => hm.style.width = "200px" , 1);
    
}