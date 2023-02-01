const inputText=document.querySelector('#input-text');
const add=document.querySelector('#add');
const list=document.querySelector('.list');
const reset=document.querySelector('#reset');


add.addEventListener('click',(e)=>{
    var para=document.createElement("p");
    // para.classList.add('paragraph-styling');
    para.innerText=inputText.value;
    list.appendChild(para);
    inputText.value="";
    para.addEventListener('dblclick',(e)=>{
        list.removeChild(para);
    });
    para.addEventListener('click',(e)=>{
        para.style.textDecoration="line-through";
    })
});

reset.addEventListener('click',(e)=>{
    list.innerText="";
});

