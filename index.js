const logonScreen = document.querySelector('.logon');
const logonButton = document.querySelector('#logon-button');
const createButton = document.querySelector('#create-account-button');

const logonUsername = document.querySelector('.logon-username');
const logonPassword = document.querySelector('.logon-password');

const createUsername = document.querySelector('.create-username');
const createPassword = document.querySelector('.create-password');

createButton.addEventListener('click', () => {
    if (createUsername.value == '' || createPassword.value == ''){
        alert('please enter details')
    } else {
        if (localStorage.getItem('accounts') == null){
            const accounts = {};
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }

        const accounts = JSON.parse(localStorage.getItem('accounts'));

        if (accounts[createUsername.value] != undefined){
            alert('please chose another username')
        } else {  
            console.log(accounts);
            accounts[createUsername.value] = createPassword.value;
            localStorage.setItem('accounts', JSON.stringify(accounts));

            // Accounce that username and password has been created
            const ok = document.createElement('p')
            ok.classList.add('ok')
            logonScreen.appendChild(ok);
            ok.textContent = `OK! ${createUsername.value}, your account has been created. Please Log In :)`;
        }
    }
})


logonButton.addEventListener('click', () => {
    if (logonUsername.value == '' || logonPassword.value ==' '){
        alert('please enter username and password')
    } else {
        const accounts = JSON.parse(localStorage.getItem('accounts'));
        if (accounts[logonUsername.value] == logonPassword.value){
            logonScreen.classList.add('hide');
        } else {
            alert('incorrect login or password');
        }
    }

})