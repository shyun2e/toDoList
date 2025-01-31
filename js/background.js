const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImg}`;
bgImage.className = 'bgImage';
document.body.appendChild(bgImage);