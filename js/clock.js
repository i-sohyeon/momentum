const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); //Date object는 호출하는 당시의 현재 날짜와 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //padStart는 string에만 사용 가능
    //String으로 감싸주면 변수를 number에서 string으로 바꿀 수 있음.

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000); //이 코드가 있어야지 코드가 매초 반복됨
