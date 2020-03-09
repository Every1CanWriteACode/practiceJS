"use strict"

const kintamasis = document.querySelector('.lenta');
console.log(kintamasis);

let rowCount = 8;
let columnCount = 8;
let colorOne = "#fff";
let colorTwo = "#000";

let color = '';
let HTML = '';
kintamasis.innerHTML = HTML;


for(let y = 0; y < rowCount; y++){    
    HTML += `<div class="row"
                  style="height:calc(100% / ${rowCount})">`;
                     
        for(let x=0; x < columnCount; x++){
            if((y + x) % 2 == 0){
                color = colorOne;
              } else {
                color = colorTwo;
              }   
            HTML += `<div class="column"
                        style="background-color: ${color}; width:calc(100% / ${columnCount})"></div>`;
                         
        }
        
       HTML += `</div>`    
    }
kintamasis.innerHTML = HTML;
