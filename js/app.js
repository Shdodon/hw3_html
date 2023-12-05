function askName() {
    let name = document.getElementById("name").value
        // console.log(name.value)
    document.getElementById("output").value = ""

    if (name == '') {
        document.getElementById("error").innerText = 'Ошибка, введите имя!'
        return
    }

    document.getElementById("error").innerText = ''
    document.getElementById("output").innerText = `Привет! ${name}`
}