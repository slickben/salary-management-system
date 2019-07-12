//Get all pending loan
let pendingLoans = JSON.parse(localStorage.getItem("loans"));

//Dom element
let displayLoan = document.getElementById("Loan")

class Store {
    constructor(){

    }
    static getPaidLoan = () =>{
        let paidLoans;
        if(localStorage.getItem("paidLoans") === null){
            paidLoans = []
        }else{
            paidLoans = JSON.parse(localStorage.getItem("paidLoans"))
        }
        return paidLoans
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
                return
            }
        
            
        })        
    }
    static paid = (loanId)=> {
        let paidLoans = Store.getPaidLoan()
        pendingLoans.map( (loan, index) => {
            if(loanId === loan.loanId){
                let paid = true
                paidLoans.push({...loan, paid})
                pendingLoans.splice(index, 1)
                localStorage.setItem("paidLoans", JSON.stringify(paidLoans))
                localStorage.setItem("loans", JSON.stringify(pendingLoans))
                
            }else{
                return
            }
        
            
        })
    }
}

class UI {
    static populatePendingLoan = () => {
        //get loans from localstorage
        let loans = JSON.parse(localStorage.getItem("loans"));
        loans.map( loan => {
            if(loan.approved ){
                displayLoan.innerHTML += `
                <div>
                    <ul class="list-group">
                        <li class="pending" id="list">
                            <span>Name:${loan.name} </span>
                            <span>LoanAtm:$ ${loan.loanAmt}</span>          
                            <span id="approved"><button style="background-color: green; color: white" class="btn">approved</button></span
                            <span id="declined"><button name="${loan.loanId}" class="btn paid">pay loan</button></span>    
                        </li>
                    </ul>
                </div>
            
              `
            }
            else if(loan.declined){
                displayLoan.innerHTML += `
                <div>
                    <ul class="list-group">
                        <li class="pending" id="list">
                            <span>Name:${loan.name} </span>
                            <span>LoanAtm:$ ${loan.loanAmt}</span>          
                            <span id="declined"><button style="background-color: red; color: white" class="btn">declined</button></span>
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

    if(e.target.matches('.paid')){
        let loanId = e.target.getAttribute('name')
        let el = e.target.parentElement
        // console.log(el)
        Store.paid(loanId, el)
        // UI.deleteLoan(e.target)
        
    }

}) 






