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

"https://images.dailyobjects.com/marche/assets/images/other/artboard-2.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"

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
  img_1.setAttribute("src", image_1[num]);
  first_block.append(img_1);

  img_2.setAttribute("src", image_1[num -2]);
  second_block.append(img_2);

  img_3.setAttribute("src", image_1[num +3]);
  third_block.append(img_3);
}, 2000);
