const container = document.querySelector('.container');

for(i=1;i<=256;i++){
    let content = document.createElement('div');
    content.classList.add('d');
    content.addEventListener("mouseover", function( event ) {
        event.target.style.background = randomColor();
      }, false);
    container.appendChild(content);
}

function randomColor(){
    return color="rgb(" + Math.floor(Math.random() * 255) +", "+ Math.floor(Math.random() * 255) +", " + Math.floor(Math.random() * 255) +")";
}

function createSketch(sizeGrid){
    container.style.cssText="grid-template-columns: repeat(" + sizeGrid + " , 1fr); grid-template-rows: repeat(" + sizeGrid + " , 1fr);";
    document.querySelectorAll('.d').forEach(e => e.remove());
    for(i=1;i<=(sizeGrid*sizeGrid);i++){
        let content = document.createElement('div');
        content.classList.add('d');
        content.addEventListener("mouseover", function( event ) {
            event.target.style.background = randomColor();
          }, false);
        container.appendChild(content);
    }
}

function clearSketch(){
    const clearDivs=document.getElementsByClassName('d');
    for (i=0;i<=clearDivs.length;i++){
        clearDivs[i].style.background = "white";
    }
}

function newSketch(){
    sizeGrid=prompt("Insert the value of your desire grid");
    while(sizeGrid == 0){
        sizeGrid=prompt("The value can't be 0, please enter a number between 1 and 100");
    };
    while(sizeGrid>100){
        sizeGrid=prompt("The value can't be that high, please enter a number between 1 and 100");
    };
    createSketch(sizeGrid); 
}
