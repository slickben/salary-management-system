//Dom elem
// document.getElementById('name');
// document.getElementById('email');
// document.getElementById('id');
// document.getElementById('gender-male');
// document.getElementById('gender-female');
// document.getElementById('file');
// document.getElementById('position');
// document.getElementById('salary');

class User {
    constructor(name, email, id, sex, imag, position, salary){
        this.name = name
        this.email = email
        this.id = id
        this.sex = sex
        this.position = position
        this.salary = salary 
        this.imag = imag
    }
}

class Store {
    
    static getUsers(){
        let users;
        if(localStorage.getItem("users") === null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users;
    }

    static createUser = (user) => {
        const users = Store.getUsers()
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
    }
}

class UI {
    static clearField = () =>{
        document.getElementById('name').value = ""
        document.getElementById('email').value = "";
        document.getElementById('id').value = "";
        document.getElementById('gender-male').checked = false;
        document.getElementById('gender-female').checked = false;
        document.getElementById('position').value = "";
        document.getElementById('salary').value = "";
    }
}

// Events

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    let sex;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let id = document.getElementById('id').value;
    let genderMale = document.getElementById('gender-male');
    let genderFemale = document.getElementById('gender-female');
    // let img = document.getElementById('file').value;
    let position = document.getElementById('position').value;
    let salary = document.getElementById('salary').value;

    if(genderFemale.checked){
        sex = genderFemale.value
    }else if(genderMale.checked){
        sex = genderMale.value
    }

    const user = new User(name, email, id, sex, "https://via.placeholder.com/150", position, salary)
    Store.createUser(user)
    UI.clearField()

})