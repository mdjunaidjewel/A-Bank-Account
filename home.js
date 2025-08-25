const logOut = document.getElementById("log-out");
logOut.addEventListener('click',function(){
    window.location.href = 'index.html'
});


// Add Money 

const addMoney = document.getElementById('add-money')
addMoney.addEventListener('click',function(e){
    e.preventDefault();

    const addAmount = parseInt(document.getElementById('add-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const validPin = 1234;
    const bankNumber = document.getElementById('bank-number').value;
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    if(isNaN(addAmount)|| addAmount <= 0){
        alert("Invalid Amount");
        return;
    }
    if(bankNumber.length < 11 || bankNumber.length > 11){
        alert("Invalid Account Number");
        return;
    }
    if(pinNumber !== validPin){
        alert("Invalid Pin number");
        return;
    }

    const totalAvailable = addAmount + availableBalance;
    document.getElementById('available-balance').innerText = totalAvailable;
});


// Cash out 


const withDraw = document.getElementById('with-draw');
withDraw.addEventListener('click',function(e){
    e.preventDefault();
    const validPin = 1234;
    const agentNumber = parseInt(document.getElementById('agent-number').value);
    const agentAmount = parseInt(document.getElementById('agent-amount').value);
    const agentPin = parseInt(document.getElementById('agent-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(agentAmount <=0 || agentAmount > availableBalance || isNaN(agentAmount)){
        alert("Invalid Amount");
        return;
    }

    if(agentPin !== validPin){
        alert('Invalid Pin number');
        return;
    }
    if(agentAmount === ''){
        return;
    }

    const totalAvailable = availableBalance - agentAmount;
    document.getElementById('available-balance').innerText = totalAvailable;

});


// Toggle features

const addMoneyBtn = document.getElementById('add-money-btn');
const cashOutBtn = document.getElementById('cash-out-btn');
const transferBtn = document.getElementById('transfer-money-btn');

addMoneyBtn.addEventListener('click',function(){
    document.getElementById('latest-payment-area').style.display = 'none';
    document.getElementById('cash-out-area').style.display = 'none';
    document.getElementById('add-money-area').style.display = 'block';
});

cashOutBtn.addEventListener('click',function(){
    document.getElementById('latest-payment-area').style.display = 'none';
    document.getElementById('add-money-area').style.display = 'none';
    document.getElementById('cash-out-area').style.display = 'block';
});

transferBtn.addEventListener('click',function(){
    document.getElementById('add-money-area').style.display = 'none';
    document.getElementById('cash-out-area').style.display = 'none';
    document.getElementById('latest-payment-area').style.display = 'block';
});
