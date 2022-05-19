const images = [
    "01.jpg", "02.jpg", "03.jpg", "04.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage)

const bgImage = document.createElement("img");
// console.log(bgImg);
bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);
//append(뒤에)대신 prepend(앞에)를 쓸수도 있음.


