

//user id

let userId;


//initialize user object
class User  {
    constructor(name, email, id, sex, imag, position, salary){
        this.name = name
        this.email = email
        this.id = id
        this.sex = sex
        this.position = position
        this.salary = salary 
        this.imag = imag
    }

    static SaveLoan = (loanAmt, userId, users) =>  {
        let loanDetails = []
        users.map( user => {
            if(user.id === userId){
                loanDetails.push({...user, loanAmt})
                localStorage.setItem('loanDetails', JSON.stringify(loanDetails))
            }
        })
        
    }
}



//instantiate user class
const users = [
    new User("benson momodu", "bensonaisaac@gmail.com", 1231, "male", "/IMG_1065 (3).JPG","staff", 50),
    new User("micheal adeyeye", "cormodorahansolo@gmail.com", 4562, "male", "/61446479_1318420064982075_8224629129346023424_n.jpg", "staff", 70),
    new User("andrew okowe", "andrewokowe@gmail.com", 3789, "male", "/50279602_1211323669025225_5849314998349725696_n.jpg","staff", 30),
    new User("opeyemi solomon", "soloris@gmail.com", 4346, "male", "/26991668_685959455126423_1940975070209025591_n.jpg","staff", 90)
]



//all event 

//search handler
document.getElementById('search-form').addEventListener('submit', function (e)  {
    e.preventDefault()
    let input = document.getElementById('search')
    const filter = input.value
    const dispUser = document.getElementById('User')
    users.map( (user) => {
        if(filter == user.id){
            userId = user.id
            dispUser.innerHTML = `
            <acticle class="card User-item">
                <header class="user__header">
                    <h1 class="user__title">${user.name}</h1>
                </header>
                <div class="user__image">
                    <img src="${user.imag}">
                </div>
                <ul class="user__content">
                    <li>EMAIL:<span>${user.email}</span></li>
                    <li>SEX:<span>${user.sex}</span></li>
                    <li>POSITION:<span>${user.position}</span></li>
                    <li style="background-color: white ;border: none"><button id="showModal" value="${user.id}" onclick="displayFunc()">Click here if you want to take loan</button></li>
                </ul>
            </acticle>
        `
        }
        document.getElementById('search').value = ''
    })
})


//get elem for the loan modal
const modal = document.getElementById('myModal')
const span = document.getElementsByClassName('close')[0]

//display modal handler 
function displayFunc() {
    modal.style.display = 'block'
}

//close modal handler
span.addEventListener('click', () => {
    modal.style.display = 'none'
})

// Submit loan Handler
document.getElementById("loanBtn").addEventListener('submit', (e) => {
    e.preventDefault()
    let loanAmt = document.getElementById('loanAmt').value
    console.log(userId)
    User.SaveLoan(loanAmt, userId, users,)
    
})
// export const functiony = () => {

// }