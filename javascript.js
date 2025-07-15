document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#container");
    const screenWidth = window.innerWidth;
    console.log(screenWidth);

    function createGrid(numberOfSquareByRow,numberOfSquareByColumn) {
        for (let i = 0; i < numberOfSquareByRow; i++) {
            for (let j = 0; j < numberOfSquareByColumn; j++) {
                const square = document.createElement("div");
                square.classList.toggle("square");
                let sizeOfSquare;
                sizeOfSquare = (screenWidth - 30 * 2)/numberOfSquareByColumn;
                
                square.style.cssText =`height: ${sizeOfSquare}px; width: ${sizeOfSquare}px; 
                background-color: white; border-style: solid; 
                border: 1px solid; box-sizing: border-box`;
                container.appendChild(square);
                
                square.addEventListener("mouseover", (event) => {
                    square.style.backgroundColor = `${getRandomColor()}`;
                });
            }
    }





    

}
    // square.addEventListener("click", (event) => {
    //     console.log("I have clicked");
    //     // square.style.cssText = `background-color: ${getRandomColor};`;
    //     square.style.cssText = `background-color: black;`;
    // });



    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i < 6 ; i++) {
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    createGrid(16,16);

});









