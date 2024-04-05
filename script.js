var eme=document.querySelector('#display')


var em=document.querySelectorAll('.btn');
em.forEach(divyam =>{
    divyam.addEventListener('click',(hanu) =>{
        console.log(hanu.target.innerHTML);
        eme.value+=hanu.target.innerHTML;
    })
})

var ans=document.querySelector('.ans');
ans.addEventListener('click', function(){
    eme.value=eval(eme.value);
    console.log(eme.value);
})

var clear=document.querySelector('.btnCLR');
clear.addEventListener('click',function(){
    eme.value='';
})

var stclear=document.querySelector('.btnDE');
stclear.addEventListener('click',function(){
    eme.value=eme.value.toString().slice(0,-1);
})

