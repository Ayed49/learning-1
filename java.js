document.getElementById('login-submit').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    
    // user password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    
    if(userEmail == 'abc@gmail.com' && userPassword == 'secret'){
        window.location.href = 'bank.html';
    }
})

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);


    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = parseFloat (previousDepositAmount) + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input fild
    depositInput.value = '';
})