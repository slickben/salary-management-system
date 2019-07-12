let elem = document.getElementById('approved')
let approveLoan = JSON.parse(localStorage.getItem("approveLoan"));
approveLoan.map(loan => {
    elem.innerHTML += `<div class="card user" style=" font-size: 15px; width:200px; height: 300px">
    <img class="card-img-top" src="${loan.imag}" alt="Card image" style="max-height: 150px; width:100%">
    <div class="card-body">
        <h5 class="card-title">${loan.name}</h5>
        <p class="card-text">loan Amt  $${loan.loanAmt}</p>
        <p class="card-text text-white text-center bg-success">Approved</p>
    </div>
    </div>`
})
















new User("benson momodu", "bensonaisaac@gmail.com", 1231, "male", "/IMG_1065 (3).JPG","M.D", 50),
    new User("micheal adeyeye", "commodorehansolo@gmail.com", 4562, "male", "/61446479_1318420064982075_8224629129346023424_n.jpg", "Project manager", 70),
    new User("andrew okowe", "andrewokowe@gmail.com", 3789, "male", "/50279602_1211323669025225_5849314998349725696_n.jpg","staff", 30),
    new User("opeyemi solomon", "soloris@gmail.com", 4346, "male", "/26991668_685959455126423_1940975070209025591_n.jpg","staff", 90),
    new User('adeshola dammy', "dammyadesholami@gmail.com", 4191, "male", "/58373777_2139652062797081_2729297703375732736_n.jpg",  "staff",)














