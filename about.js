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

let elements = document.querySelectorAll('.block1text');
for (let elm of elements) {
  observer.observe(elm);
}

let elements1 = document.querySelectorAll('.block2text1');
for (let elm of elements1) {
  observer.observe(elm);
}

let elements2 = document.querySelectorAll('.block3text1');
for (let elm of elements2) {
  observer.observe(elm);
}

let elements3 = document.querySelectorAll('.block3block');
for (let elm of elements3) {
  observer.observe(elm);
}

let elements4 = document.querySelectorAll('.block3block3');
for (let elm of elements4) {
  observer.observe(elm);
}

let elements5 = document.querySelectorAll('.block3atext');
for (let elm of elements5) {
  observer.observe(elm);
}

let elements6 = document.querySelectorAll('.block4blocks1text');
for (let elm of elements6) {
  observer.observe(elm);
}

let elements7 = document.querySelectorAll('.block4blocks1texta');
for (let elm of elements7) {
  observer.observe(elm);
}

let elements8 = document.querySelectorAll('.block4blocks2img');
for (let elm of elements8) {
  observer.observe(elm);
}

let elements9 = document.querySelectorAll('.block4blocks2');
for (let elm of elements9) {
  observer.observe(elm);
}