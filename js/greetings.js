const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
// 굳이 변수로 지정해 주는 이유는 변수명이 오타나면, js가 오타를 지적해줌.
// 본인이 생성한 string을 사용할 때는 변수로 지정해주는 것이 좋음

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //없어도 작동
    // console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    //paintGreetings라는 함수를 호출하는데
    //이 함수는 (username)이라는 인자를 받고 있음
}

function paintGreetings(username) {
    // const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${username}`; // === "Hello " + username ;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // hide the form
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME); //임의로 추가해준 코드
}