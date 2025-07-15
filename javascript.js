const container = document.querySelector("#container");
let numberOfSquare = 16;
let numberOfSquareByRow = numberOfSquare;
let numberOfSquareByColumn = numberOfSquare;

const screenWidth = window.innerWidth;
console.log(screenWidth);

for (let i = 0; i < numberOfSquareByRow; i++) {
    // console.log(i);
    for (let j = 0; j < numberOfSquareByColumn; j++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        let sizeOfSquare;
        sizeOfSquare = (screenWidth - 30 * 2)/numberOfSquare;
        
        square.style.cssText =`height: ${sizeOfSquare}px; width: ${sizeOfSquare}px; 
        background-color: white; border-style: solid; 
        border: 1px solid; box-sizing: border-box`;
        container.appendChild(square);
        console.log(sizeOfSquare);
        // console.log(j);
    }
    

}

