//Get all pending loan
let pendingLoans = JSON.parse(localStorage.getItem("loans"));

//Dom element
let displayLoan = document.getElementById("Loan")

class Store {
    constructor(){

    }
    //sava aprove loan 
    static AproveLoan = (loanId) => {
        pendingLoans.map( (loan, index) => {
            if(loanId === loan.loanId){
                loan.approved = true
                loan.declined = false
                loan.pending = false
                pendingLoans.splice(index, 1, {...loan,})
                localStorage.setItem("loans", JSON.stringify(pendingLoans))

            }else{
                return
            }
            
        })
    }
    //save decline loan
    static DeclineLoan = (loanId) => {
        pendingLoans.map( (loan, index) => {
            if(loanId === loan.loanId){
                loan.declined = true
                loan.approved = false
                loan.pending = false
                pendingLoans.splice(index, 1, {...loan,})
                localStorage.setItem("loans", JSON.stringify(pendingLoans))
                
            }else{
                console.log('any thing')
            }
        
            
        })        
    }
}

class UI {
    static populatePendingLoan = () => {
        //get loans from localstorage
        let loans = JSON.parse(localStorage.getItem("loans"));
        loans.map( loan => {
            if(loan.approved){
                displayLoan.innerHTML += `
                <div>
                    <ul class="list-group">
                        <li class="pending" id="list">
                            <span>Name:${loan.name} </span>
                            <span>LoanAtm:$ ${loan.loanAmt}</span>          
                            <span id="declined"><button class="btn">decline</button></span>
                            <span id="approved"><button class="btn">approved</button></span>    
                        </li>
                    </ul>
                </div>
            
                `
            }else if(loan.declined){
                displayLoan.innerHTML += `
                <div>
                    <ul class="list-group">
                        <li class="pending" id="list">
                            <span>Name:${loan.name} </span>
                            <span>LoanAtm:$ ${loan.loanAmt}</span>          
                            <span id="declined"><button class="btn">declined</button></span>
                            <span id="approved"><button class="btn">approve</button></span>     
                        </li>
                    </ul>
                </div>
            
              `
            }else{
                displayLoan.innerHTML += `
                <div>
                    <ul class="list-group">
                        <li class="pending" id="list">
                            <span>Name:${loan.name} </span>
                            <span>LoanAtm:$ ${loan.loanAmt}</span>          
                            <span id="declined"><button name="${loan.loanId}"  class="btn decline">decline</button></span>
                            <span id="approved"><button name="${loan.loanId}" class="btn approve">approve</button></span>    
                        </li>
                    </ul>
                </div>
            
            `
            }
            // console.log(loan.name)
            
            
        })
        

        
        document.getElementById('view-loan').style.display = "none";
        let view = document.getElementById('view')
        view.style.display = "block"
        view.value = `There are ${loans.length} pending loan`

    }

    static deleteLoan = (el) => {
        if(el.classList.contains('btn')){
            el.parentElement.parentElement.remove()
        }
    }

}




//Event

document.getElementById('view-loan').addEventListener("click", () => {
    console.log("it works")
    UI.populatePendingLoan()
})


//handle approve button
document.querySelector('body').addEventListener('click', function (e) {
    if(!e.target){
        return
    }

    if(e.target.matches('.approve')){
        // let showApproveBtn = e.target.parentNode
        let loanId = e.target.getAttribute('name')
        let el = e.target.parentElement
        // console.log(el)
        Store.AproveLoan(loanId, el)
        // UI.deleteLoan(e.target)
    }

    if(e.target.matches('.decline')){
        let loanId = e.target.getAttribute('name')
        let el = e.target.parentElement
        // console.log(el)
        Store.DeclineLoan(loanId, el)
        // UI.deleteLoan(e.target)
        
    }

}) 






