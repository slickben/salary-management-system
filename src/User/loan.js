
//dom elem
let displayLoan = document.getElementById("Loan")
console.log(displayLoan)
//get loans from localstorage
let loans = JSON.parse(localStorage.getItem("loanDetails"));
console.log(loans)

loans.map( loan => {
    console.log(loan.name)
    displayLoan += `
        <div>
            <ul>
                <li>
                    <span>Name${loan.name}</span>
                    <span>LoanAtm${loan.loanAmt}</span>
                    <span><button>Aprove</button></span>
                    <span><button>Decline</button></span>
                </li>
            </ul>
        </div>
    
    `
})