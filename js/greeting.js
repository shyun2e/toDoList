

/* 1
const loginForm = document.querySelector("#login-form");
const loginInput1 = loginForm.querySelector("input");
const loginButton1 = loginForm.querySelector("button");
*/

// 2
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN__CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event){
    /*
        방금 일어난 event의 정보를 담아 함수 인자로 넘겨줌
        첫 번째 arg인 event는 이러한 기본 정보를 받아옴.
        preventDefault 
        -> form의 기본 동작인 브라우저의 새로고침을 
        막아준다.
    */
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN__CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings();

}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN__CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN__CLASSNAME);
    loginForm.addEventListener("submit" , onLoginSubmit);   
} 
else{
    //show the greeting
    paintGreetings();
}