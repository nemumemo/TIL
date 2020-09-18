"use strict"

{
// サムネイル画像配列
const images = [
  "img/IMG_0209.JPG",
  "img/IMG_0290.JPG",
  "img/IMG_0295.JPG",
];
let currentIndex = 0;

// メイン画像に選択された画像を表示
const mainImage = document.getElementById("main");
mainImage.src = images[currentIndex];

// サムネイル画像を追加
images.forEach((image, index) => {
  const img = document.createElement("img");
  img.src = image;
  // リスト要素を作成
  const li = document.createElement("li");
  // 選択画像に"current"クラスを設定
  if (index === currentIndex) {
    li.classList.add("current");
  }
  // サムネイル画像をクリックしたときの処理
  li.addEventListener("click", () => {
    // 選択された画像をメイン画像へ設定
    mainImage.src = image;
    // 全てのリスト要素を取得し、"current"クラスの再設定
    const thumbnails = document.querySelectorAll("#thumbnails > li");
    thumbnails[currentIndex].classList.remove("current");
    currentIndex = index;
    thumbnails[currentIndex].classList.add("current");
  });
  // サムネイル画像をリスト要素として追加
  li.appendChild(img);
  document.querySelector("#thumbnails").appendChild(li);
});

// 次へ（＞）ボタンクリック時の処理
const next = document.getElementById("next");
next.addEventListener("click", () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
  document.querySelectorAll("#thumbnails > li")[target].click();
});

// 戻る（＜）ボタンクリック時の処理
const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length -1;
  }
  document.querySelectorAll("#thumbnails > li")[target].click();
});

// メイン画像のスライド表示
let timeoutId;
function playslideshow() {
  timeoutId = setTimeout(() => {
    next.click();
    playslideshow();
  }, 800);
}

// 再生（Play）ボタンクリック時の処理
let isPlaying = false;
const play = document.getElementById("play");
play.addEventListener("click", () => {
  if (isPlaying === false) {
    playslideshow();
    play.textContent = "Purse";
  } else {
    play.textContent = "Play";
    clearTimeout(timeoutId);
  }
  isPlaying = !isPlaying;
});

}