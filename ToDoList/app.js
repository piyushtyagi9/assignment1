const inpt = document.getElementById('input');
const list = document.getElementById('list');
const button = document.querySelector('button');
 

document.addEventListener('keydown',(e) => {
    
    const li = document.createElement('li');
    const icon = document.createElement('span');

    li.innerText = inpt.value;

    icon.innerHTML = `<i class="fas fa-trash-alt"></i>`
    li.prepend(icon);
    
    if (e.key === 'Enter') {
        if (input.value === "") {

        } else {
            list.append(li);
            inpt.value = "";
    
        }
    }
    li.addEventListener('click', (e) => {
        li.classList.toggle('delete');
    })

    icon.addEventListener('click', (e) => {
    
        li.remove();
    })
})

button.addEventListener('click', (e) => {

    inpt.classList.toggle('add');

})

