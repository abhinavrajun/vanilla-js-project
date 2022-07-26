window.addEventListener('load',() =>{
    const pics = [{id: 1, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"},{id: 2, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"},{id: 3, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"},{id: 4, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"},{id: 5, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg"},{id: 6, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg"},{id: 7, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg"},{id: 8, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg"},{id: 9, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg"},{id: 10, img:"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/10.jpg"}]

    const startbuttton = document.getElementById("startbutton");
    startbuttton.addEventListener("click", (e) => {
        e.preventDefault();
        
        stateOfGame +=1;
        displayscreen();
       
    });

    function displayscreen(){
        
        const samplediv = document.getElementById("sample");
        samplediv.innerHTML = "";
        const sampleimage = document.createElement("img");
        let temp = getRandomInt(0,9);
        console.log(stateOfGame);
        
        sampleimage.setAttribute("src",pics[temp].img);
        samplediv.appendChild(sampleimage);
        const griddiv = document.getElementById("grid");
        griddiv.innerHTML = "";
        if(stateOfGame>2){
            griddiv.style.width="95%";

        }
        const xlen = (2 + stateOfGame)*(2+ stateOfGame);
        let samplepos = [];
        //const gridimg = document.createElement("img");
        for (let i = 0; i < stateOfGame; i++) {
            let x= getRandomInt(0,xlen-1);
            
            while (samplepos.includes(x)){
                x = getRandomInt(0,xlen-1);
            }
            samplepos.push(x)

        }
        console.log(samplepos);
        for (let i = 0; i < xlen; i++) {
            
                const gridimg = document.createElement("img");
                
                if (samplepos.includes(i)){
                    gridimg.setAttribute("src", pics[temp].img);
                    griddiv.appendChild(gridimg);
                    console.log('inside loop');
                    console.log(i);

                }
                else{
                    let temppos = getRandomInt(0,9);
                    while(temppos === temp){
                        temppos = getRandomInt(0,9);
                    }
                    gridimg.setAttribute("src",pics[temppos].img);
                    griddiv.appendChild(gridimg);
                }
                   
        }

    }
    

})
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+ 1) + min);
}

stateOfGame= 0;