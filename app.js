const input = document.getElementById('input')
const button = document.getElementById('button')
const items = document.getElementById('container')
const list = document.createElement('li')

const todos = [];


const addTodo = () => {
    if (input.value == '') return;

    const todo = {
        id: todos.length + 1,
        todo: input.value,
        isFinished: false
    };

    const template = `
<label type="checkbox" id="${todo.id}" onClick="finishTodo(${todo.id})">
    <input type="checkbox"/>
    ${input.value}
    <br>
</label>
`;

    items.insertAdjacentHTML('beforeend', template)
    todos.push(todo)
    input.value = '';
};


let timesChecked = 1
let timesLabelClicked = 0

const finishTodo = (id) => {
    //const todo = document.getElementById(id);
    //todo.classList.add('checked');
    if (timesChecked == 1) {
        const todo = document.getElementById(id);
        todo.classList.add('checked');
        timesChecked = 2
    } else {
        const todo = document.getElementById(id);
        todo.classList.remove('checked');
        timesChecked = 1
    }

    if (timesLabelClicked = 0) {
        timesLabelClicked = 1
        console.log('ok')
    }
    return;

    // if (timesLabelClicked = 0) {
    //     timesLabelClicked = 1
    //     console.log('ok')
    // } else if (timesLabelClicked = 1) {
    //     timesLabelClicked = 2
    // } else if (timesLabelClicked = 2) {
    //     timesLabelClicked = 3
    //     const todo = document.getElementById(id);
    //     todo.style.color = 'red'
    // } else {
    //     timesLabelClicked = 0
    //     console.log('?');

    // }
};

button.addEventListener('click', addTodo);





document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'Enter') {
        addTodo()
    }
}, false);



//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

///


// button.addEventListener('click', () => {
//     let activity = input.value
//     if (activity == '') return;
//     input.value = ''
//     items.insertAdjacentHTML('afterbegin', `<input type="checkbox"">${activity} <br> </input>`)
// })

// document.addEventListener('keyup', (event) => {
//     var name = event.key;
//     if (name === 'Enter') {
//         let activity = input.value
//         if (activity == '') return;
//         input.value = ''
//         items.insertAdjacentHTML('afterbegin', `<input type="checkbox">${activity}</input><br>`)
//     }
// }, false);

// items.addEventListener('change', e => {
//     if (e.target.checked === true) {
//         alert(items.textContent)
//         let ten = items.textContent

//         //console.log("Checkbox is checked - boolean value: ", e.target.checked)
//     }
//     return;
// });