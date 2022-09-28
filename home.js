function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.block2text1');
for (let elm of elements) {
  observer.observe(elm);
}

let elementss = document.querySelectorAll('.block2text2');
for (let elm of elementss) {
  observer.observe(elm);
}

let elementss1 = document.querySelectorAll('.block2text3');
for (let elm of elementss1) {
  observer.observe(elm);
}

let elementss2 = document.querySelectorAll('.block2text4');
for (let elm of elementss2) {
  observer.observe(elm);
}

let elementss3 = document.querySelectorAll('.block3img1');
for (let elm of elementss3) {
  observer.observe(elm);
}

let elementss4 = document.querySelectorAll('.block3img2');
for (let elm of elementss4) {
  observer.observe(elm);
}

let elementss5 = document.querySelectorAll('.block4text1');
for (let elm of elementss5) {
  observer.observe(elm);
}

let elementss6 = document.querySelectorAll('.block4text2');
for (let elm of elementss6) {
  observer.observe(elm);
}

let elementss7 = document.querySelectorAll('.block5blocks');
for (let elm of elementss7) {
  observer.observe(elm);
}

let elementss8 = document.querySelectorAll('.block5blocks1f');
for (let elm of elementss8) {
  observer.observe(elm);
}

let elementss9 = document.querySelectorAll('.block5blocks2img');
for (let elm of elementss9) {
  observer.observe(elm);
}

let elementss10 = document.querySelectorAll('.block6colortext');
for (let elm of elementss10) {
  observer.observe(elm);
}

let elementss11 = document.querySelectorAll('.block6colortexty');
for (let elm of elementss11) {
  observer.observe(elm);
}

let elementss12 = document.querySelectorAll('.block6colortexta');
for (let elm of elementss12) {
  observer.observe(elm);
}

let elementss13 = document.querySelectorAll('.block6img2');
for (let elm of elementss13) {
  observer.observe(elm);
}



const element1 = document.getElementById("block1");

function scrollToTop(element1) {
  element1.scrollIntoView({behavior: "smooth"});
}

const element2 = document.getElementById("block4text1");

function scrollToTop(element2) {
  element2.scrollIntoView({behavior: "smooth"});
}

const element3 = document.getElementById("block6colortexta");

function scrollToTop(element3) {
  element3.scrollIntoView({behavior: "smooth"});
}

const element4 = document.getElementById("block6colortexta");

function scrollToTop(element4) {
  element4.scrollIntoView({behavior: "smooth"});
}

const element5 = document.getElementById("block4text1");

function scrollToTop(element5) {
  element5.scrollIntoView({behavior: "smooth"});
}












