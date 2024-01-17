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