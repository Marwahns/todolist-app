// 1. Reference html element in js
const formTask = document.querySelector('.form-task')

// 2. Menambahkan event listener di element form
formTask.addEventListener('submit', (event) => {
    event.preventDefault()

    // 3. Reference html element input
    const inputForm = document.querySelector('.input-form')
    console.log(inputForm.value)

    // 4. Reference html element ul / wrapper list
    const wrapperList = document.querySelector('.task-list-wrapper')

    // 5. create <li> using js
    const taskList = document.createElement('li')

    // 6. Masukkan input value ke <li>
    taskList.innerHTML =  inputForm.value

    // 7. append <li> ke <ul>
    wrapperList.append(taskList)

    // 8. Menghilangkan karakter di dalam input
    inputForm.value = ""
})