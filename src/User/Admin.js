class Admin {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
        this.isLogin = false
    }

    logIn = (email, password) => {
        //velidate Admin
        if(email === this.email && password === this.password){
            window.open("/view/index.html")
        }else{
            return
        }
        
    }

    logOut = () => {
        window.open("/view/login.html")
    }
}

let admin = new Admin("benson momodu", "benson.isaac.momodu@gmail.com", "@benson.123")

//Events

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email, typeof password)
    admin.logIn(email, password)
})