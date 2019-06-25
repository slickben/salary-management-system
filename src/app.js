//instantiate user object
const users = [
    new User("benson momodu", "bensonaisaac@gmail.com", 1, "male", "staff", 50),
    new User("micheal adeyeye", "cormodorahansolo@gmail.com", 2, "male", "staff", 70),
    new User("andrew okowe", "andrewokowe@gmail.com", 3, "male", "staff", 30),
    new User("opeyemi solomon", "soloris@gmail.com", 4, "male", "staff", 90)
]

//get the div to display user
const dispUser = document.getElementById('User')

//loop through the user object and display each users
users.map((user, index) => {
    console.log(user)
    dispUser.innerHTML += `
        <acticle class="card User-item">
            <header class="user__header">
                <h1 class="user__title">${user.name}</h1>
            </header>
            <div class="user__image">
                <img src="/IMG_1065 (3).JPG">
            </div>
            <ul class="user__content">
                <li>EMAIL:<span>${user.email}</span></li>
                <li>SEX:<span>${user.sex}</span></li>
                <li>POSITION:<span>${user.position}</span></li>
            </ul>
        </acticle>
    `
})


