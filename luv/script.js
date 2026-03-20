const startBtn = document.getElementById("startBtn");
const title = document.getElementById("title");
const cat = document.getElementById("cat");
const tapText = document.getElementById("tapText");
const flower = document.getElementById("flower");
const finalText = document.getElementById("finalText");

startBtn.onclick = () => {
  // ซ่อนเริ่มต้น
  title.style.display = "none";
  startBtn.style.display = "none";

  // เปลี่ยนพื้นหลัง
  document.body.style.background = "#e6ccff";

  // แสดงแมว
  cat.style.display = "block";

  setTimeout(() => {
    cat.style.left = "40%";
  }, 100);

  // พอเดินถึงกลาง
  setTimeout(() => {
    tapText.style.display = "block";
  }, 3000);
};

// คลิกแมว
cat.onclick = () => {
  tapText.style.display = "none";

  // โชว์ดอกไม้
  flower.style.display = "block";
  flower.classList.add("show");

  // 3 วิ แล้วโชว์ข้อความสุดท้าย
  setTimeout(() => {
    finalText.style.display = "block";
    startHearts();
  }, 3000);
};

// สร้างหัวใจร่วง
function startHearts() {
  setInterval(() => {
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