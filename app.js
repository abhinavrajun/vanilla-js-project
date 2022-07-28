window.addEventListener("load", () => {
  const pics = [
    {
      id: 1,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg",
    },
    {
      id: 2,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg",
    },
    {
      id: 3,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg",
    },
    {
      id: 4,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg",
    },
    {
      id: 5,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg",
    },
    {
      id: 6,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg",
    },
    {
      id: 7,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg",
    },
    {
      id: 8,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg",
    },
    {
      id: 9,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg",
    },
    {
      id: 10,
      img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/10.jpg",
    },
  ];

  const startbuttton = document.getElementById("startbutton");
  startbuttton.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerText === "Restart") {
      stateOfGame = 0;
      e.target.innerText = "Start the Game";
      displayscreenstart();
    } else {
      stateOfGame += 1;

      displayscreen();
    }
  });
  function displayscreenstart() {
    const samplediv = document.getElementById("sample");
    samplediv.innerHTML = "";
    const griddiv = document.getElementById("grid");
    griddiv.innerHTML = "";
  }
  function displayscreen() {
    const startbuttton = document.getElementById("startbutton");
    startbuttton.innerText = "Next Stage";
    startbuttton.style.display = "none";
    const samplediv = document.getElementById("sample");
    samplediv.innerHTML = "";
    const sampleimage = document.createElement("img");
    let temp = getRandomInt(0, 9);
    console.log(stateOfGame);

    sampleimage.setAttribute("src", pics[temp].img);
    samplediv.appendChild(sampleimage);
    const griddiv = document.getElementById("grid");
    griddiv.innerHTML = "";
    if (stateOfGame > 2) {
      griddiv.style.width = "95%";
    }
    const xlen = (2 + stateOfGame) * (2 + stateOfGame);
    let samplepos = [];
    //const gridimg = document.createElement("img");
    for (let i = 0; i < stateOfGame; i++) {
      let x = getRandomInt(0, xlen - 1);

      while (samplepos.includes(x)) {
        x = getRandomInt(0, xlen - 1);
      }
      samplepos.push(x);
    }
    console.log(samplepos);
    for (let i = 0; i < xlen; i++) {
      const gridimg = document.createElement("input");
      const picdiv = document.createElement("div");
      const cover = document.createElement("div");
      picdiv.setAttribute("class", "picdiv");
      picdiv.setAttribute("id", "picdiv");
      cover.setAttribute("id", "cover");
      cover.setAttribute("class", "cover");
      griddiv.append(picdiv);
      picdiv.append(cover);

      if (samplepos.includes(i)) {
        gridimg.setAttribute("type", "image");
        gridimg.setAttribute("src", pics[temp].img);
        gridimg.setAttribute("id", "gridimg");
        //gridimg.setAttribute("onclick","selectImage()");
        picdiv.appendChild(gridimg);
        console.log("inside loop");
        console.log(i);
      } else {
        let temppos = getRandomInt(0, 9);
        while (temppos === temp) {
          temppos = getRandomInt(0, 9);
        }
        gridimg.setAttribute("type", "image");
        gridimg.setAttribute("src", pics[temppos].img);
        gridimg.setAttribute("id", "gridimg");
        //gridimg.setAttribute("onclick","selectImage()");
        picdiv.appendChild(gridimg);
      }
    }
    const allcovers = document.getElementsByClassName("cover");
    const gridpic = document.querySelectorAll("input");
    let timer = setTimeout(() => {
      for (let i = 0; i < allcovers.length; i++) {
        gridpic[i].style.opacity = "0";
      }
    }, 1500);

    console.log(gridpic);
    let counttemp = stateOfGame + 1 - 1;

    for (let i = 0; i < gridpic.length && counttemp > -1; i++) {
      gridpic[i].addEventListener("click", (e) => {
        if (e.target.src === pics[temp].img) {
          counttemp -= 1;
          gridpic[i].style.opacity = "1";
          if (counttemp == 0) {
            startbuttton.style.display = "inline";
            console.log("correct");
          }
        } else {
          if (counttemp != 0 && counttemp > -1) {
            startbutton.innerText = "Restart";
            startbuttton.style.display = "inline";
            console.log("wrong");
          }
        }
      });
    }
  }

  // const gridpic = document.getElementById('gridimg');
  // if(gridpic){
  //     gridpic.addEventListener('click', e=>{
  //         console.log(e.target.src);
  //     });
  // }
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

stateOfGame = 0;
