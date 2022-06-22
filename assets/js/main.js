// advertisement
const Advertisement = document.querySelector(".js-advertisement")
const BtnClose = document.querySelector(".js-advertisement-btn__close")
const AdvertisementContent = document.querySelector(".js-advertisement-content")


function hideAdvertisement(){
    Advertisement.classList.add('close')
}

function StopPropagation (event){
    event.StopPropagation()
}

BtnClose.addEventListener('click',hideAdvertisement)
Advertisement.addEventListener('click',hideAdvertisement)

AdvertisementContent.addEventListener('click',StopPropagation)



// show hide login
const Logins = document.querySelectorAll(".js-login")
const Signins= document.querySelectorAll(".js-signin")
const LoginBox = document.querySelector(".js-login-box")
const SignInBox = document.querySelector(".js-signin-box")
const Modal = document.querySelector(".modal")
const Returns = document.querySelectorAll(".btn-return")

for (const login of Logins ){
    login.addEventListener('click',function(){
       Modal.classList.add('open')
       LoginBox.classList.add('open')
    }
)}

for (const signin of Signins ){
    signin.addEventListener('click',function(){
        Modal.classList.add('open')
        SignInBox.classList.add('open')
    }
)}

for (const Return of Returns ){
    Return.addEventListener('click',function(){
       Modal.classList.remove('open')
       LoginBox.classList.remove('open')
       SignInBox.classList.remove('open')
    }
)}



// login&signin
const LoginSignin = document.querySelector(".login-signin")
const LogOut = document.querySelector(".log-out")
const User = document.querySelector(".js-user")
const Separate = document.querySelector(".js-separate")
const Notification = document.querySelector(".notification")
const Notification1 = document.querySelector(".notification-1")
const LoginBtn = document.querySelector(".btn-login")
const Cart1 = document.querySelector(".js-cart-1")
const Cart2 = document.querySelector(".js-cart-2")


LogOut.addEventListener('click',function(){
    User.classList.add('close')
    LoginSignin.classList.add('open')
    Separate.classList.add('close')
    Notification.classList.add('hiden')
    Notification1.classList.add('show')
    Cart1.classList.add('show')
    Cart2.classList.add('hiden')
})

LoginBtn.addEventListener('click',function(){
    User.classList.remove('close')
    LoginSignin.classList.remove('open')
    Separate.classList.remove('close')
    Notification.classList.remove('hiden')
    Notification1.classList.remove('show')
    LoginBox.classList.remove('open')
    Modal.classList.remove('open')
})



const search = document.querySelector(".header__search-bar-content")
const searchHistory = document.querySelector(".header__search-bar-content-history")

search.addEventListener('click',function(){
    searchHistory.classList.add('show')
})