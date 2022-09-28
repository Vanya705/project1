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
let elements = document.querySelectorAll('.block5blocks1');
for (let elm of elements) {
  observer.observe(elm);
}
let elements1 = document.querySelectorAll('.block5text1');
for (let elm of elements1) {
  observer.observe(elm);
}

let elements2 = document.querySelectorAll('.block5text2');
for (let elm of elements2) {
  observer.observe(elm);
}

let elements3 = document.querySelectorAll('.block6');
for (let elm of elements3) {
  observer.observe(elm);
}
