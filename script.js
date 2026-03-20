const startBtn = document.getElementById("startBtn");
const title = document.getElementById("title");
const cat = document.getElementById("cat");
const tapText = document.getElementById("tapText");
const flower = document.getElementById("flower");
const finalText = document.getElementById("finalText");

let catClick = 0;
let heartInterval;

// เริ่ม
startBtn.onclick = () => {
  title.style.display = "none";
  startBtn.style.display = "none";

  document.body.style.background = "#e6ccff";

  cat.style.display = "block";

  setTimeout(() => {
    cat.style.left = "40%";
  }, 100);

  setTimeout(() => {
    tapText.style.display = "block";
  }, 3000);
};

// คลิกแมว
cat.onclick = () => {
  catClick++;

  // 👉 ครั้งที่ 1
  if (catClick === 1) {
    tapText.style.display = "none";

    flower.style.display = "block";

    setTimeout(() => {
      finalText.style.display = "block";
      startHearts();
    }, 3000);
  }

  // 👉 ครั้งที่ 2
  else if (catClick === 2) {
    clearInterval(heartInterval);

    document.body.innerHTML = "";

    const img = document.createElement("img");
     img.src = "https://media.discordapp.net/attachments/1015271508173664328/1484491160595730472/8ca73a88f9154671.png?ex=69be6ba1&is=69bd1a21&hm=d728b3394de71640da34cc22e3ba341096c8cf3ec9ff46067b64b75bd3d785dc&=&format=webp&quality=lossless&width=864&height=864";
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.width = "300px";

    img.classList.add("shake");

    document.body.appendChild(img);

    // 2 วิ → เปลี่ยนเป็นเงิน
    setTimeout(() => {
      img.classList.remove("shake");
      img.src = "https://media.discordapp.net/attachments/1015271508173664328/1484491160079568966/ce586ade0b615a56.png?ex=69be6ba1&is=69bd1a21&hm=8836c3f443ca588326a195711d8c7e391e5b2d9df3298577c4b2aad9ff88af89&=&format=webp&quality=lossless&width=864&height=864";
    }, 2000);
  }
};

// 👉 คลิกดอกไม้ → รถ + หัวใจ
flower.onclick = () => {
  clearInterval(heartInterval);

  document.body.innerHTML = "";

  const car = document.createElement("img");
  car.src = "https://media.discordapp.net/attachments/1015271508173664328/1484491203675291760/Untitled-1.png?ex=69be6bab&is=69bd1a2b&hm=c286775da11b45a00c236181045aaff159f78dedb9a8e8c0919294e7cb54e0dd&=&format=webp&quality=lossless&width=968&height=968";
  car.style.position = "fixed";
  car.style.top = "50%";
  car.style.left = "50%";
  car.style.transform = "translate(-50%, -50%)";
  car.style.width = "500px";

  document.body.appendChild(car);

  startHearts(); // หัวใจกลับมา
};

// หัวใจร่วง
function startHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "♥";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";

    let hue = Math.random() * 360;

    document.body.appendChild(heart);

    let fall = setInterval(() => {
      let top = parseFloat(heart.style.top);
      heart.style.top = top + 3 + "px";

      hue += 5;
      heart.style.color = `hsl(${hue}, 80%, 60%)`;

      if (top > window.innerHeight) {
        heart.remove();
        clearInterval(fall);
      }
    }, 30);

  }, 200);
}