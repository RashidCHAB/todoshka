
document.querySelector('#submitbtn').addEventListener('click', (e) => {
    e.preventDefault()

    const text = document.querySelector("#text")
    const todolist = document.querySelector("#todo-list")
    if (!text.value) {
        text.placeholder = "Текст обязателен!"
        return
    }


    
    const dlt = document.createElement("button")
    dlt.className = "deleting"
    dlt.textContent = "X"
    dlt.addEventListener("click", (e) => {
        e.target.parentElement.remove()
    })
    const item = document.createElement("div")
    item.className = "task"
    text.placeholder = "Введите текст"
    item.textContent = text.value
    item.append(dlt)
    todolist.append(item)

    text.value = ''
})



