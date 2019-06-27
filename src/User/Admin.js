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
            window.location.replace ("/view/index.html")
           this.isLogin = true
        }else{
            return
        }
        
    }

    logOut = () => {
        window.location.replace('/view/login.html')
    }
}

let admin = new Admin("benson momodu", "benson.isaac.momodu@gmail.com", "@benson.123")

//Events

// login handler
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email, typeof password)
    admin.logIn(email, password)
})

// logout handler
document.getElementById("logout").addEventListener("click", () => {
    admin.logOut()
})