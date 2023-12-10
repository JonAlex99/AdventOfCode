import fs from "fs";

const filePath = "./3des-input.txt"
// const filePath = "./3des-demo.txt"

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const lines = data.split('\n');

    const numberRegex = /\d+/g
    const symbolRegex = /[^a-zA-Z0-9\s.]/g

    let sumOfValidNumbers = 0

    let match;
    let symbolLocation = new Array(lines.length);
    let innerArray = lines[0].length;

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

    // 0 1 1 1 0 0 0 0 = index 1, length 3
    // 1 1 1 1 1 0 0 0 = index 0 -> 4
    // lines.forEach((line) => {

    //     const numberLocation = []
    //     while ((match = numberRegex.exec(line)) !== null){
    //         numberLocation.push({
    //             number: parseInt(match[0], 10),
    //             index: match.index
    //         });

    //     }
    //     for(let i = 0; i < match.index + match[0].length + 1; i++){
    //         for (let j = match.index - 1; j < match.index + match[0].length + 1; j++ )
    //         if(i < 0) continue;
    //         if(symbolLocation[i] == 1){
    //             sumOfValidNumbers += parseInt(match[0], 10);
    //             break;
    //         }
    //     }
    // })

});