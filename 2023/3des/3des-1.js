import fs from "fs";

// const filePath = "./3des-input.txt"
const filePath = "./3des-demo.txt"

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const lines = data.split('\r\n');

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
            console.log(match)
            symbolLocation[i][match.index] = 1
            console.log(symbolLocation[i] + " Þetta er að vinna á " + i)
        }
    }
    match;
    for (var x = 0; x < lines.length; i++){
        const numberLocation = []
        while ((match = numberRegex.exec(lines[x])) !== null){
            numberLocation.push({
                number: parseInt(match[0], 10),
                index: match.index
            });

        }

        for (var i = x-1; i <= x+1; i++){
            if(i >= 0){
                for (var j = match.index - 1; j < match.index + match)
            }
        }

    }
    lines.forEach((line) => {

        const numberLocation = []
        while ((match = numberRegex.exec(line)) !== null){
            numberLocation.push({
                number: parseInt(match[0], 10),
                index: match.index
            });

        }
        for(let i = ; i < match.index + match[0].length + 1; i++){
            for (let j = match.index - 1; j < match.index + match[0].length + 1; j++ )
            if(i < 0) continue;
            if(symbolLocation[i] == 1){
                sumOfValidNumbers += parseInt(match[0], 10);
                break;
            }
        }
    })

});