const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const btn = document.querySelectorAll('.btn')
const startbtn = document.querySelector('.startBtn')

textarea.focus()
let type;
let api_url;
let partici;

btn.forEach(e=>{
    e.addEventListener("click",()=>{
    if(e.classList.contains("highlight")){
        e.classList.remove("highlight")
        type = undefined
    }else{
         //remove class from all the btn
        btn.forEach(f=>{
            f.classList.remove("highlight")
        })
         //add class to the new  btn
        e.classList.add("highlight")
        type = e.dataset.id
    }
    })
})

startbtn.addEventListener("click",getRandom)

async function getRandom(){
    //color click effect
    changeclr()

    setTimeout(def,100)

    partici = parseInt(textarea.value, 10);
    api_url = `http://www.boredapi.com/api/activity?type=${type}&participants=${partici}`;

    if(textarea.value==='' ){
        api_url =`http://www.boredapi.com/api/activity?type=${type}` ;        
    }
    if(textarea.value==='' && type===undefined){
        api_url = `http://www.boredapi.com/api/activity`;        
    }
    const response = await fetch(api_url)
    const data = await response.json()
    tagsEl.innerHTML = ''

    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = await data.activity 
    tagsEl.appendChild(tagEl)
}
function changeclr (){
    startbtn.style.backgroundColor=`#1D2521`
    startbtn.style.borderColor=`#1D2521`
}
function def(){
    startbtn.style.backgroundColor=`#069C54`
    startbtn.style.borderColor=`#069C54`
}