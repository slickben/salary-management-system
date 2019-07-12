let elem = document.getElementById('declined')
let declineLoan = JSON.parse(localStorage.getItem("declineLoan"));
declineLoan.map(loan => {
    elem.innerHTML += `<div class="card user" style=" font-size: 15px; width:200px; height: 300px">
    <img class="card-img-top" src="${loan.imag}" alt="Card image" style="max-height: 150px; width:100%">
    <div class="card-body">
        <h5 class="card-title">${loan.name}</h5>
        <p class="card-text">loan Amt  $${loan.loanAmt}</p>
        <p class="card-text text-white text-center bg-warning">Declined</p>
    </div>
    </div>`
})