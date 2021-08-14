const inpt = document.querySelector('input');
const butn = document.querySelector('button');
const todo = document.querySelector('ul');

butn.addEventListener('click', (e)=> {
    const list = document.createElement('li');
    const delet = document.createElement('button')
    const update = document.createElement('button');
    const spn = document.createElement('span');

    list.innerText = inpt.value;
    const todov = list.innerText;
    delet.innerHTML = `<i class="fas fa-trash-alt"></i> delete`
    update.innerHTML = `<i class="far fa-edit"></i> edit`

    delet.classList.add('delete')
    update.classList.add('update');
    spn.append(delet);
    spn.append(update);
    if (inpt.value === '') {

    } else {

        list.append(spn);
        todo.append(list);
        inpt.value = "";

    }

    delet.addEventListener('click', (e)=> {
        list.remove();
    })

    update.addEventListener('click', (e) => {
        
        const inp = document.createElement('input');
        inp.classList.add('inpu')
        inp.value = todov;
        list.innerText = "";
        list.prepend(inp);
        list.append(spn);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' ) {

                list.innerText = inp.value;
                list.append(spn);
                inp.remove();
            }
            
        })
    })


})