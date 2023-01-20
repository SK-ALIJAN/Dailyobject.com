let search = document.getElementById("search");
let pop_up = document.querySelector("#display-for-search");

let image_1 = [
  "https://images.dailyobjects.com/marche/assets/images/other/artboard-8.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIc-wMtYuglrH4vByQiEL3cJwFAG7K62551w&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SuUE__JQGa7sZng9afWmz9HfgJuqoI8new&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyZan2mfYoMtpS95kKozXk74vntSp4q4EhA&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYSk3On6KsyX3gIj22BZxUKMZVbzyfKuWRrZzfQfEUTUfpEjKtG_-YAThEtUVt3sNpzE&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYgF8ekkYyKqeOIJyPAYG10WF9_tLahHzvg&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsOcHmG4Vf6NgoD7SfqKM5jiD1c8Nz0psP06rbgUY6cJa3loalGo_2H1_d0jRV-zL_wI&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SuUE__JQGa7sZng9afWmz9HfgJuqoI8new&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTF_YU13YNnxfiZ2f3fonyzyfeKC5nQk16-g&usqp=CAU",

  "https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,w-1001,dpr-1",

  "https://images.dailyobjects.com/marche/assets/images/other/artboard-2.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1",

  "https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,w-625,dpr-1",

  "https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,w-625,dpr-1",
];

let first_block = document.querySelector(".imag1");
let second_block = document.querySelector(".imag2");
let third_block = document.querySelector(".imag3");

// search cross sign
document.getElementById("try-later").onclick = () => {
  pop_up.style.display = "none";
};
search.addEventListener("click", (e) => {
  pop_up.style.display = "block";
});

// sliding image
let img_1 = document.createElement("img");
let img_2 = document.createElement("img");
let img_3 = document.createElement("img");

setInterval(() => {
  let num = Math.round(Math.random() * 9 + 1);

  if (num <= 3) num += 3;

  img_1.setAttribute("src", image_1[num]);
  first_block.append(img_1);

  img_2.setAttribute("src", image_1[num + 1]);
  second_block.append(img_2);

  img_3.setAttribute("src", image_1[num + 2]);
  third_block.append(img_3);
}, 2000);

// email subscribing

let email = document.querySelector("input[type='email']");

let submmition = document.querySelector("input[type='submit']");

let email_popup = document.querySelector("#email-popup");
let wrong_popup = document.querySelector("#wrong-image");

email.addEventListener("focus", (e) => {
  e.preventDefault();
  email.style.outline = "none";
  email.style.border = "none";
});

submmition.addEventListener("click", (e) => {
  e.preventDefault();
  let regex = /[a-z]+[0-9]{1,5}@gmail.com/gi;

  let result = regex.test(email.value);
  if (result) {
    email_popup.style.visibility = "visible";
    document.querySelector("body").style.backgroundColor = "grey";

    setTimeout(() => {
      email_popup.style.visibility = "hidden";

      document.querySelector("body").style.backgroundColor = "white";
    }, 3000);
  } else {
    wrong_popup.style.visibility = "visible";
    setTimeout(() => {
      wrong_popup.style.visibility = "hidden";
    }, 1000);
  }
});

// top scroll
let top_scroll = document.getElementById("top-scroll");

window.onscroll = () => {
  scroll();
};

// when you are scrolling 20 pixel from the top
function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_scroll.style.display = "block";
  } else {
    top_scroll.style.display = "none";
  }
}

// when you are click to get the top

top_scroll.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// drop-own menu

let new_arr = document.querySelector("#drop-down-for-new-arr");

let acces = document.querySelector("#drop-down-for-accessories");

let hoom_office = document.querySelector("#drop-down-hoom-office");

let button_1 = document.querySelector(".btnn1");
let button_2 = document.querySelector(".btnn2");
let button_3 = document.querySelector(".btnn3");

button_1.addEventListener("click", () => {
  new_arr.style.visibility = "visible";
  acces.style.visibility = "hidden";
  hoom_office.style.visibility = "hidden";
});

button_2.addEventListener("click", () => {
  acces.style.visibility = "visible";
  new_arr.style.visibility = "hidden";
  hoom_office.style.visibility = "hidden";
});

button_3.addEventListener("click", () => {
  hoom_office.style.visibility = "visible";
  acces.style.visibility = "hidden";
  new_arr.style.visibility = "hidden";
});

let click = document.querySelectorAll(".clk");

for (const ele of click) {
  ele.addEventListener("click", (e) => {
    new_arr.style.visibility = "hidden";
    acces.style.visibility = "hidden";
    hoom_office.style.visibility = "hidden";
  });
}
