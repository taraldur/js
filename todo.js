let listDOM = document.querySelector('#list')
let text = document.getElementById('task')

checkfunction();
addDeleteEl();

function checkfunction(){
    let listDomLi = listDOM.querySelectorAll('li')

    if(listDomLi.length > 0){
        listDomLi.forEach(function(li){
            li.addEventListener('click', function(){
                this.classList.toggle('checked')
            })
        })
    }
}

function addDeleteEl(){
    let listDomLi = listDomLi.querySelectorAll('li')

    if(listDomLi.length>0){
        listDomLi.forEach(function(li){
            let existingSpans = li.querySelectorAll('span')
            existingSpans.forEach(function(span){
                span.remove()
            })

            let deleteEl = document.createElement('span')
            deleteEl.innerHTML = 'x';
            deleteEl.style.display = 'none'
            deleteEl.classList.add('removeEl')
            li.appendChild(deleteEl)
        })
    } else{

    }
}

function newElement(){
    let inputVal = text.value;
    let liDOM = document.createElement('li')

    if(inputVal === "" || inputVal.trim() === ""){
        $('.error').toast('show')
    }else{
        $('.success').toast('show')
        liDOM.innerHTML = inputVal
        listDOM.appendChild(liDOM)
        text.value=""
    }
    liDOM.addEventListener('click', function(){
        this.classList.toggle('checked')
    })
    addDeleteEl()
    removeFunc()
}

removeFunc()
function removeFunc(){
    let removeEls = listDOM.querySelectorAll('.removeEl')

    removeEls.forEach(function(el){
        el.addEventListener('click', function(e){
            let parentEl = e.target.parentNode
            parentEl.remove()
        })
    })
}