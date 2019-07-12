//user id
let userId;

let loanId = '_' + Math.random().toString(36).substr(2, 9);

//get elem for the loan modal
const modal = document.getElementById('myModal')
const span = document.getElementsByClassName('close')[0]


//initialize Store object
class Store  {

    static getLoan = () => {
        let loans;
        if(localStorage.getItem("loans") === null){
            loans = [];
        }else{
            loans = JSON.parse(localStorage.getItem("loans"))
        }
        return loans;
    }

    static SaveLoan = (loanAmt, userId, users) =>  {
        // let loanDetails = []
        let date = new Date()
        let approved = false
        let declined = false
        let pending = true
        let loans = Store.getLoan()
        users.map( user => {
            if(user.id === userId){ 
                    loans.push({...user, loanAmt, date, loanId, approved, declined, pending})
                    localStorage.setItem('loans', JSON.stringify(loans))  
                
            }
        })
        
    }
}

let users = JSON.parse(localStorage.getItem("users"));


//all event 

class UI {
    static searchUser = () => {
        let input = document.getElementById('search')
        const filter = input.value
        const dispUser = document.getElementById('User')
        users.map( (user) => {
            if(filter == user.id){
                userId = user.id
                console.log(`User id is ${userId} in the method`)
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
    }

}

//search handler
document.getElementById('search-form').addEventListener('submit', function (e)  {
    e.preventDefault()
    UI.searchUser()
})



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
    const loans = Store.getLoan()
    let loanAmt = document.getElementById('loanAmt').value
    if(loans.length == 0){
        // console.log(loans.length == 0)
        Store.SaveLoan(loanAmt, userId, users,)
        document.getElementById("loanBtn").style.display = "none"
        document.getElementById("success").style.display = "block"
    }else{
        // console.log(loans.length == 0)
        let filterAndCheckIfHasPendingLoan = loans.filter( loan => { 
            let pendingLoan;
            if(loan.id === userId & !loan.declined){
                pendingLoan =  loan
            }
            return pendingLoan
        })
        // console.log(filterAndCheckIfHasPendingLoan)
        // console.log(loans)
        if(filterAndCheckIfHasPendingLoan.length == 0){
            Store.SaveLoan(loanAmt, userId, users,)
            console.log(filterAndCheckIfHasPendingLoan)
            document.getElementById("loanBtn").style.display = "none"
            document.getElementById("success").style.display = "block"
        }else {
            filterAndCheckIfHasPendingLoan.map( loan =>{
                if(loan.approved || loan.pending){
                    // console.log(`pay your loan`)
                    document.getElementById("loanBtn").style.display = "none"
                    document.getElementById("success").style.display = "block"
                    document.getElementById("success").innerText = ` Dear ${loan.name} You still some loan please pay before you make another`
                }else{
                    Store.SaveLoan(loanAmt, userId, users,)
                    document.getElementById("loanBtn").style.display = "none"
                    document.getElementById("success").style.display = "block"
                }
            })
        }
    }
    
    
    
})

