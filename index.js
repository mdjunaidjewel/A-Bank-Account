const loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    const number = 12345678910;
    const pin = 1234;
    const mobileNumber = parseInt(document.getElementById('mobile-number').value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    if( number === mobileNumber && pin === pinNumber){
        window.location.href='home.html';
    }
    else{
        alert("Invalid Credentials!");
    }
});