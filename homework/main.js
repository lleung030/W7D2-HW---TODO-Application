
const employeesEl = document.getElementById('addedItems') //employees

function addEmployee(name, jobTitle){
    const employeeEl = document.createElement('div')
    employeeEl.classList.add('employee-card')

    employeeEl.innerHTML = `
        <h2>Name: ${name}</h2>
        <p>Job Title: ${jobTitle}</p>
    `
    employeesEl.appendChild(employeeEl)
}

const stationariesEl = document.getElementById('addedItems')

function addStationary(stationary, quantity){
    const stationaryEl = document.createElement('div')
    stationaryEl.classList.add('stationary-card')

    stationaryEl.innerHTML = `
        <h2>Equipmemt: ${stationary}</h2>
        <p>Quantity: ${quantity}</p>
    `
    stationariesEl.appendChild(stationaryEl)
}



// addEmployee('Lucas', 'Software Developer')
// addEmployee('Lucas', 'Software Developer')
// addEmployee('Lucas', 'Software Developer')

let formEl = document.getElementById('employeeForm')
formEl.addEventListener('submit', (event)=>{
    event.preventDefault() //Prevents refresh
    

    let nameInput = document.getElementsByName('name')[0]
    let jobTitleInput = document.getElementsByName('jobTitle')[0]

    // console.log(nameInput.ariaValueMax, jobTitleInput.value)

    addEmployee(nameInput.value, jobTitleInput.value)

    nameInput.value = ''
    jobTitleInput.value = ''

})

const equipmentFormEl = document.getElementById('equipmentForm')
equipmentFormEl.addEventListener('submit', (event) =>{
    event.preventDefault()
    

    let stationaryInput = document.getElementsByName('stationary')[0]
    let quantityInput = document.getElementsByName('quantity')[0]

    addStationary(stationaryInput.value, quantityInput.value)

    stationaryInput.value = ''
    quantityInput.value = ''
})


const button = document.querySelector('button');

// button.addEventListener('click', (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });


// animation

const animation = document.querySelector('p.animation');
let applyAnimation = document.querySelector('.activate');
let iterationCount = 0;


applyAnimation.addEventListener('click', () => {
  animation.classList.toggle('active');
  iterationCount = 0;
  const active = animation.classList.contains('active');
});

// animation


const clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', (event)=>{
    employeesEl.innerHTML = '';
    animation.classList.toggle('active');
    const active = animation.classList.contains('active');
})


let buttonColorChange = document.querySelector('button');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

buttonColorChange.onclick = () => {
  button.style.backgroundColor = randomColor();
};

buttonColorChange.onauxclick = (e) => {
  e.preventDefault();
  button.style.color = randomColor();
}

buttonColorChange.oncontextmenu = (e) => {
  e.preventDefault();
}
