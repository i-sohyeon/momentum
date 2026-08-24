# 🕐 Momentum Clone

> 노마드 코더의 **「바닐라 JS로 크롬 앱 만들기」** 강의를 기반으로 제작한 Momentum 클론코딩 프로젝트입니다.
> JavaScript의 기본 문법부터 DOM 조작, 이벤트 처리, LocalStorage, Geolocation, Weather API까지 학습하고 이를 실제 웹 서비스 형태로 구현했습니다.

---

## 🔗 Demo & Links

* **Live Demo**: https://i-sohyeon.github.io/momentum/ 
* **GitHub: https**://github.com/i-sohyeon/momentum 
* **Learning Source**: [노마드 코더 - 바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners)

---

## 📌 Project Overview

Momentum의 주요 기능을 클론코딩하며 Vanilla JavaScript의 기본 개념과 브라우저 API 활용 방법을 학습했습니다.

단순히 JavaScript 문법을 학습하는 것에서 그치지 않고, 실제 웹 서비스에서 사용되는 기능을 직접 구현하는 것을 목표로 진행했습니다.

### 구현 기능

* 👤 사용자 이름 입력 및 저장
* 🕐 실시간 시계
* 💬 랜덤 명언 표시
* 🖼️ 랜덤 배경 이미지
* ✅ To Do List 등록 / 삭제
* 💾 LocalStorage를 이용한 데이터 저장
* 📍 Geolocation API를 이용한 현재 위치 확인
* 🌤️ OpenWeather API를 이용한 날씨 정보 표시

---

## 🛠 Tech Stack

| Category    | Technology                     |
| ----------- | ------------------------------ |
| Markup      | HTML5                          |
| Styling     | CSS3                           |
| Language    | JavaScript (ES6+)              |
| Browser API | DOM, LocalStorage, Geolocation |
| API         | OpenWeather API                |
| Deployment  | GitHub Pages                   |

---

## 📚 What I Learned

### JavaScript 기본 문법

* 변수와 상수
* 데이터 타입
* 배열과 객체
* 함수
* 조건문
* 반복문
* return

JavaScript의 기본 문법을 학습하고 실제 기능 구현에 적용했습니다.

### DOM 조작

JavaScript를 이용해 HTML 요소를 선택하고 생성 및 수정하는 방법을 학습했습니다.

* `querySelector`
* `createElement`
* `innerText`
* `classList`
* `appendChild`

### Event 처리

사용자의 입력과 행동에 따라 JavaScript가 동작하도록 이벤트를 처리하는 방법을 학습했습니다.

* `click`
* `submit`
* `preventDefault`
* `addEventListener`

### LocalStorage

브라우저의 LocalStorage를 활용하여 사용자 이름과 To Do List 데이터를 저장하고 불러오는 기능을 구현했습니다.

### 비동기 처리 및 API

`fetch()`를 이용해 외부 API에서 데이터를 받아오고, JSON 데이터를 활용하여 화면에 날씨 정보를 표시했습니다.

### Geolocation API

브라우저에서 사용자의 현재 위치 정보를 가져와 날씨 API 요청에 활용했습니다.

---

## 📂 Project Structure

```text
momentum-clone/
├── css/
│   └── style.css
├── js/
│   ├── background.js
│   ├── clock.js
│   ├── greetings.js
│   ├── quotes.js
│   ├── todo.js
│   └── weather.js
├── img/
├── index.html
└── README.md
```

---

## 💡 Learning Point

이번 프로젝트를 통해 JavaScript가 단순히 HTML 요소에 동작을 추가하는 언어가 아니라,

**사용자의 입력 → 데이터 처리 → 브라우저 저장 → 외부 API 통신 → 화면 업데이트**

와 같은 하나의 흐름을 구성하는 데 사용된다는 것을 이해할 수 있었습니다.

특히 DOM 조작과 이벤트 처리, LocalStorage, Fetch API를 직접 사용하면서 JavaScript가 브라우저에서 어떻게 동작하는지 이해하는 데 중점을 두었습니다.

---

## 🚀 Getting Started

```bash
git clone [repository-url]
cd momentum-clone
```

프로젝트 폴더에서 `index.html`을 실행하면 확인할 수 있습니다.

---

## 📝 Reference

본 프로젝트는 **Nomad Coders 「바닐라 JS로 크롬 앱 만들기」** 강의를 기반으로 제작한 학습 프로젝트입니다.

강의에서 제공하는 기본적인 구현 방식을 학습한 후, JavaScript와 브라우저 API의 동작 원리를 이해하는 것을 목적으로 진행했습니다.
