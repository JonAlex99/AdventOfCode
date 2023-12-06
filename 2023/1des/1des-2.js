import fs from "fs";

// const filePath = "./1des-demo2.txt";
const filePath = "./1des-2.txt";

function findTheIntegers(line){
    var lowHighDictionary = {};
    lowHighDictionary['lowest'] = {};
    lowHighDictionary['highest'] = {};
    var lowestIndex;
    var highestIndex;

    for (var i = 0; i < line.length; i++){
        if (!isNaN(line[i])){
            lowestIndex = line[i].toString();
            lowHighDictionary['lowest'][lowestIndex] = i
            break;
        }
    }
    
    for (var i = line.length - 1; i >= 0; i--){
        if (!isNaN(line[i])){
            highestIndex = line[i].toString();
            lowHighDictionary['highest'][highestIndex] = i
            break;
        }
    }

    // console.log(line)
    // console.log(lowHighDictionary);
    return lowHighDictionary;
}

function findTheStrings(line){
    const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var lowHighDictionary = {};
    lowHighDictionary['lowest'] = {};
    lowHighDictionary['highest'] = {};
    var lowestIndex = Number.MAX_VALUE;
    var highestIndex = Number.MIN_VALUE;
    numberWords.forEach((number) => {
        var startIndex = 0;
        var tempDict = {};
        
        while (startIndex < line.length){
            tempDict = {};
            const index = line.indexOf(number, startIndex);

            if (index === -1){
                break;
            }

            if(lowestIndex > index){
                tempDict[number] = index;
                lowHighDictionary['lowest'] = tempDict;
                lowestIndex = index;
            }

            if(highestIndex < index){
                tempDict[number] = index;
                lowHighDictionary['highest']= tempDict;
                highestIndex = index;
            }

            startIndex = index + number.length;
        }
    })

    // console.log(lowHighDictionary);
    return lowHighDictionary;
}

// function writeFailed(line){
//     const filePathFailed = "./failed.txt";
//     fs.writeFile(filePathFailed, line, (err) => {
//         if(err){
//             console.error(err);
//             return;
//         }

//     })
// }

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const numberDict = { 
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
     }
    
    const lines = data.split('\n');
    
    var totalSum = 0;
    var firstString = 0;
    var firstStringIndex = 0;
    var firstInt = 0;
    var firstIntIndex = 0;
    var lastString = 0;
    var lastStringIndex = 0;
    var lastInt = 0;
    var lastIntIndex = 0;
    var total = 0;
    lines.forEach((line) => {
        line = line.replace(/(\r\n|\n|\r)/gm, "");
        var stringInLine = findTheStrings(line);
        var intInLine = findTheIntegers(line);

        firstString = Object.keys(stringInLine['lowest'])[0];
        firstStringIndex = stringInLine['lowest'][Object.keys(stringInLine['lowest'])[0]];

        lastString = Object.keys(stringInLine['highest'])[0];
        lastStringIndex = stringInLine['highest'][Object.keys(stringInLine['highest'])[0]];

        firstInt = Object.keys(intInLine['lowest'])[0];
        firstIntIndex = intInLine['lowest'][Object.keys(intInLine['lowest'])[0]];

        lastInt = Object.keys(intInLine['highest'])[0];
        lastIntIndex = intInLine['highest'][Object.keys(intInLine['highest'])[0]];
        
        total = 0;

        typeof(firstInt) === "undefined" ? firstIntIndex = Number.MAX_VALUE : 0;
        typeof(firstString) === "undefined" ? firstStringIndex = Number.MAX_VALUE : 0;
        typeof(lastInt) === "undefined" ? lastIntIndex = -1 : 0;
        typeof(lastString) === "undefined" ? lastStringIndex = -1 : 0;


        if (firstStringIndex < firstIntIndex){
            total = numberDict[firstString]*10;
        }
        else{
            total = parseInt(firstInt)*10;
        }

        if (lastStringIndex > lastIntIndex){
            total += numberDict[lastString]
        }
        else{
            total += parseInt(lastInt)
        }

        // if (isNaN(total)) writeFailed(line);

        totalSum += total;
        console.log(`Line: ${line}, total: ${total}, totalSum: ${totalSum}`);
    });
})


"53326"
"54019"