function getAge() {
    let present = new Date().toLocaleDateString()
    console.log(present)

    let date = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let age = document.getElementById("Age")


    if (parseInt(date) < 1 || parseInt(date) > 31 || !date) {
        let error = document.getElementById("error")
        error.innerHTML = "Please enter the valid date"
        age.innerHTML = ""
        return
    }
    if (parseInt(month) < 1 || parseInt(month) > 12 || !month) {
        let error = document.getElementById("error")
        error.style.color = "red"
        error.innerHTML = "Please enter the valid month"
        age.innerHTML = ""

        return
    }

    if (parseInt(year) < 1900 || year.length > 4 || year.length < 4 || !year) {
        let error = document.getElementById("error")
        error.innerHTML = "Please enter the valid year"
        age.innerHTML = ""
        return
    }
    let error = document.getElementById("error")
    error.innerHTML = ""
    let [d, m, y] = present.split("/").map(Number)

    let x1 = y - parseInt(year)
    let x2 = Math.abs(d - parseInt(date))
    let x3 = Math.abs(m - parseInt(month))

    let totalAge = `your total age is ${x1}years ${x3}months ${x2}days`
    console.log(totalAge)
    age.innerHTML = totalAge


    document.getElementById("day").value = ""
    document.getElementById("month").value = ""
    document.getElementById("year").value = ""

}