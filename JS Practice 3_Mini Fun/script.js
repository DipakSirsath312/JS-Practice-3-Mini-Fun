const btn = document.querySelector("#throttle");
const throlleFunction = (func, delay) => {

  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);

    }
  };
};

let images = [
  "https://i.pinimg.com/1200x/c6/eb/1e/c6eb1e38fab60fd52f165d5efebcbd43.jpg",
  "https://i.pinimg.com/1200x/12/d7/5d/12d75d1c955d20585918cf9825661e31.jpg",
  "https://i.pinimg.com/736x/1f/de/52/1fde5210b64c6eb654abb608377e21af.jpg",
  "https://i.pinimg.com/1200x/b3/b8/df/b3b8df5bae256930a351958166c8f616.jpg",
  "https://i.pinimg.com/1200x/a9/c6/41/a9c6414e6594b41d0b75822645bfc04d.jpg",
  "https://i.pinimg.com/736x/5a/57/4f/5a574f459134e08c19dbac0769a36fc1.jpg",
  "https://i.pinimg.com/736x/a3/5c/f1/a35cf1e1ccf6a414f9dcc4e7354a6596.jpg",
  "https://i.pinimg.com/736x/58/9b/70/589b70a28171cb3950cca708ca7b6acf.jpg",
  "https://i.pinimg.com/736x/1d/30/9f/1d309ff8b6529b953d5343dc702fb73a.jpg"
]

document.querySelector("#center")
  .addEventListener(
    "mousemove",
    throlleFunction((details) => {
      console.log("clicked");

      var div = document.createElement("div");
      div.classList.add("imagediv");
      div.style.left = details.clientX + 'px';
      div.style.top = details.clientY + 'px';

      var img = document.createElement("img");

      const randomIndex = Math.floor(Math.random() * images.length);
      img.setAttribute("src", images[randomIndex]);

      div.appendChild(img);
      document.body.appendChild(div)

      gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
      });

      gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
      })

      setTimeout(function () {
        div.remove();
      }, 1000);

    }, 400)

  );
