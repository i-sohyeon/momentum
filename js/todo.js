const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(toDos) : object가 아닌 array로 변경할 때 사용
}


function deleteToDo(event) {
    // console.log(event.target.parentElement); 
    //event를 추가하면 event가 클릭된 위치를 알 수 있음
    //event보다는 event.target을 입력해야 많은 정보 알수 있음
    //target은 html의 element, parentElement는 element의 부모
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    //버튼이 클릭됐음을 확인하기 위함
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); //li는 span이라는 자식을 가지게 됨.
    li.appendChild(button); //append는 맨 마지막에 놓아져야함
    span.innerText = newTodo;
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //form은 submit이벤트를 가지고 그 이벤트는 새로고침하는 이벤트를 막아야함
    // console.log(toDoInput.value);

    //input의 현재 value를 새로운 변수에 복사하는 것

    toDoInput.value = ""; //toDoInput의 값을 비우는 코드
    toDos.push(newTodo);

    paintToDo(newTodo); //newToDo 호출 왜 여기서...?
    saveToDos(); //toDos array를 localStorate에 넣어주는 것.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
    console.log("hello");
}

//1. toDos를 storage에 저장하기 위해서 array를 변수선언
//2. newTodo가 그려질때마다 텍스트를 array에 push
//3. array를 localStorage에 저장해야함

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //savedToDos를 object로 변환
    // parsedToDos.forEach(sayHello);
    //parsedToDos가 가지고 있는 각각의 item에 대해서 sayHello라는 함수를 실행시켜줌
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
//javascript는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌


