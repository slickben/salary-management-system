
//dom elem
let displayLoan = document.getElementById("Loan")
console.log(displayLoan)
//get loans from localstorage
let loans = JSON.parse(localStorage.getItem("loanDetails"));
console.log(loans)

loans.map( loan => {
    console.log(loan.name)
    displayLoan.innerHTML += `
        <div>
            <ul class="list-group">
                <li id="list">
                    <span>Name: ${loan.name}</span>
                    <span>LoanAtm: ${loan.loanAmt}#</span>
                    <span class="btn"><button class="pending" onclick="pendingHandlerFunc()" id="pending">pending</button></span>
                    <div id="action-btn" class="action-btn">
                        <button onclick="declineHandlerFunc()"    class="decline">decline</button>
                        <button onclick="approveHandlerFunc()" class="approve">approve</button>
                    </div>
                </li>
            </ul>
        </div>
    
    `
})

let actionBtns =  document.getElementById("action-btn")
let pendingBtn = document.getElementById("pending")

//Event

//handle pending button
function pendingHandlerFunc() {  
    actionBtns.style.display = "block"
}

//handle approve button
function approveHandlerFunc() {  
    actionBtns.style.display = "none"
    pendingBtn.innerText = "approve"
    pendingBtn.style.backgroundColor = 'green'
    pendingBtn.style.color = 'white'

}

//handle decline button
function declineHandlerFunc() {  
    actionBtns.style.display = "none"
    pendingBtn.innerText = "decline"
    pendingBtn.style.backgroundColor = 'darkorange'
    pendingBtn.style.color = 'white'

}

