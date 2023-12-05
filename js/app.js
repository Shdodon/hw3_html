function askName() {
    let name = document.getElementById("name").value
        // console.log(name.value)
    document.getElementById("output").value = ""

    if (name == '') {
        document.getElementById("error").innerText = 'Ошибка, введите имя питомца!'
        return
    }

    document.getElementById("error").innerText = ''
    document.getElementById("output").innerText = `Теперь мы знаем его имя,  - ${name} Котеевич`
}