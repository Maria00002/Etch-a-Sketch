const container = document.querySelector("#container");
const screenWidth = window.innerWidth;

function createGrid(numberOfSquare,numberOfSquare) {
    for (let i = 0; i < numberOfSquare; i++) {
        for (let j = 0; j < numberOfSquare; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            let sizeOfSquare = (screenWidth - 30 * 2)/numberOfSquare;
                
            square.style.cssText =`height: ${sizeOfSquare}px; width: ${sizeOfSquare}px; 
            background-color: white; border-style: solid; 
            border: 1px solid; box-sizing: border-box`;
            container.appendChild(square);
            // console.log("generating square");
            square.addEventListener("mouseover", (event) => {
                square.style.backgroundColor = `${getRandomColor()}`;
            });
        }
    }  
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function getGridSize() {
    let input = prompt("please enter the number of squares for the new grid (max 100): ", "");
    let output = Number(input);
    return output;  
}
// .firstChild returns null if the node has no children
function clearScreen() {    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function checkContainerHaveChildren() {
    if (container.firstChild) {
        console.log(container.childElementCount);
        for (const child of container.children) {
            console.log(child.tagName);
        }
    }
}


function runProgram() {
    createGrid(16, 16);
    
    let button = document.querySelector(".button");
    button.addEventListener("click", function() {
        let size = getGridSize();
        if(size <= 100 && isNumber(size)) {
            clearScreen();
            createGrid(size,size);
        }
    });  
}


runProgram();










