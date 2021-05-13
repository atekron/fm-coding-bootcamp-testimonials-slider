let photo = document.querySelector(".card__photo");
let quote = document.querySelector(".card__quote");
let author = document.querySelector(".card__author");
let jobTitle = document.querySelector(".card__author-position");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

const data = [
  {
    photo: "/images/image-tanya.jpg",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    author: "Tanya Sinclair",
    jobTitle: "UX Engineer",
  },
  {
    photo: "/images/image-john.jpg",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    author: "John Tarkpor",
    jobTitle: "Junior Front-end Developer",
  },
];
let currentData = 0;

window.onload = function () {
  photo.src = data[currentData].photo;
  quote.innerText = data[currentData].quote;
  author.innerText = data[currentData].author;
  jobTitle.innerText = data[currentData].jobTitle;
};

document
  .querySelector(".card__quote")
  .addEventListener("DOMSubtreeModified", disableBtn);

function disableBtn() {
  if (currentData === 0) {
    document.querySelector(".prev").disabled = true;
  } else {
    document.querySelector(".prev").disabled = false;
  }
  if (currentData === data.length - 1) {
    document.querySelector(".next").disabled = true;
  } else {
    document.querySelector(".next").disabled = false;
  }
}

function prev() {
  if (currentData > 0) {
    currentData--;
  }
  photo.src = data[currentData].photo;
  quote.innerText = data[currentData].quote;
  author.innerText = data[currentData].author;
  jobTitle.innerText = data[currentData].jobTitle;
}

function next() {
  if (currentData < data.length - 1) {
    currentData++;
  }
  photo.src = data[currentData].photo;
  quote.innerText = data[currentData].quote;
  author.innerText = data[currentData].author;
  jobTitle.innerText = data[currentData].jobTitle;
}
