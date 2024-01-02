import fs from "fs";
import { type } from "os";

// const filePath = "./3des-input.txt"
const filePath = "./3des-demo.txt"

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const lines = data.split('\n');

    const numberRegex = /\d+/g
    const symbolRegex = /[^a-zA-Z0-9\s.]/g

    let sumOfValidNumbers = 0
    let sumOfMultipliedNumbers = 0

    let match;
    let symbolLocation = new Array(lines.length);
    let innerArray = lines[0].length;

    let starSymbolArray = {}

    for (let i = 0; i < symbolLocation.length; i++){
        symbolLocation[i] = [];
        for (let j = 0; j < innerArray; j++){
            symbolLocation[i].push(0)
        }
    }

    for (let i = 0; i < lines.length; i++){
        while((match = symbolRegex.exec(lines[i])) !== null){
            symbolLocation[i][match.index] = 1
        }
    }

    match;
    var foundSymbol = false;
    for (var x = 0; x < lines.length; x++){
        const numberLocation = []
        while ((match = numberRegex.exec(lines[x])) !== null){
            numberLocation.push({
                number: parseInt(match[0], 10),
                index: match.index
            });

        }


        numberLocation.forEach((currentNumber) => {
            // console.log("line " + x + " currentNumber", currentNumber)
            foundSymbol = false; 
            for (var i = x-1; i <= x+1; i++){
                if(i >= 0 && i < lines.length){
                    // console.log("\t" + "this is the working row " + i)
                    var currentNumberLength = currentNumber.number.toString().length
                    // console.log(currentNumber.index - 1);
                    // console.log(currentNumberLength)
                    for(var j = currentNumber.index - 1; j < currentNumber.index + currentNumberLength + 1; j++){
                        // console.log("\t" + "what is j " + j + " what is the currentNumber length " + currentNumber.number.toString().length)
                        if(j >= 0 && j < lines.length){
                            // console.log("\t\t" + "this is the current character index " + j)
                            if (symbolLocation[i][j] === 1){
                                if(lines[i][j] === "*"){
                                    let location = i + " " + j
                                    if (typeof starSymbolArray[location] === "undefined"){
                                        starSymbolArray[location] = [currentNumber.number]
                                    }
                                    else{
                                        starSymbolArray[location].push(currentNumber.number)
                                    }
                                }
                                foundSymbol = true;
                                sumOfValidNumbers += currentNumber.number;
                                console.log(sumOfValidNumbers + " " + currentNumber.number)
                                break;
                            }
                        }
                        
                    }
                }
                if (foundSymbol === true) break;
            }
        })

    }
    for (const [key, value] of Object.entries(starSymbolArray)) {
        if(value.length === 2){
            sumOfMultipliedNumbers += value[0]*value[1];
        }
      }
    console.log(sumOfMultipliedNumbers)
});