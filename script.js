// Landing page
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

// Login and Signup page
const showSignUp = document.getElementById('showSignUp');
const showLogin = document.getElementById('showLogin');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const container = document.querySelector('.container');

if (showSignUp && showLogin) {
    showSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('flipped');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('flipped');
    });
}

const loginFormElement = document.getElementById('loginForm');
const signupFormElement = document.getElementById('signupForm');

if (loginFormElement) {
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you would validate credentials here
        window.location.href = 'manufacture.html';
        // window.location.href = 'logistic.html';
        // window.location.href = 'pharamacy.html';
        // window.location.href = 'Healthcare.html';
        // window.location.href = 'distributortrial.html';
    });
}

if (signupFormElement) {
    signupFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const userType = document.getElementById('userType').value;
        let dashboardUrl;

        switch(userType) {
            case 'manufacturer':
                dashboardUrl = 'manufacture.html';
                break;
            case 'stakeholder':
                dashboardUrl = 'Healthcare.html';
                break;
            case 'logistics_transport':
                dashboardUrl = 'logistic.html';
                break;
            case 'pharmacy':
                dashboardUrl = 'pharamacy.html';
                break;
            case 'distributor':
                dashboardUrl = 'distributortrial.html';
                break;
            default:
                alert('Please select a valid user type');
                return;
        }

        window.location.href = dashboardUrl;
    });
}

// Dashboard pages
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

// Add this to all dashboard HTML files
document.querySelector(".navbar-toggle").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("open");
});