import fs from "fs";

const filePath = "./1des-demo2.txt";
// const filePath = "./1des-2.txt";

// function fixTheNumbers(line){
//     var tempLine = line.toLowerCase();
//     const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     var firstNumbers = {};
//     var lastNumbers = {};
//     var firstNumber;
//     var lastNumber;

//     if(tempLine.includes("one") || tempLine.includes("1")){

//         tempLine.indexOf("one") < tempLine.indexOf("1") ? firstNumber = tempLine.indexOf("one") : firstNumber = tempLine.indexOf("1");
//         tempLine.lastIndexOf("one") > tempLine.lastIndexOf("1") ? lastNumber = tempLine.lastIndexOf("one") : lastNumber = tempLine.lastIndexOf("1");
        
//     }
    


//     tempLine = tempLine.replaceAll("one", '1')
//     tempLine = tempLine.replaceAll("two", '2')
//     tempLine = tempLine.replaceAll("three", '3')
//     tempLine = tempLine.replaceAll("four", '4')
//     tempLine = tempLine.replaceAll("five", '5')
//     tempLine = tempLine.replaceAll("six", '6')
//     tempLine = tempLine.replaceAll("seven", '7')
//     tempLine = tempLine.replaceAll("eight", '8')
//     tempLine = tempLine.replaceAll("nine", '9')
//     return tempLine;
// }

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

    console.log(line)
    console.log(lowHighDictionary);
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

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    
    const lines = data.split('\n');
    
    var totalSum = 0;
    lines.forEach((line) => {
        line = line.replace(/(\r\n|\n|\r)/gm, "");
        var stringInLine = findTheStrings(line);
        var intInLine = findTheIntegers(line);
        var first = 0;
        var last = 0;
        var total = 0;
        for (var i = 0; i < line.length; i++){
            if (!isNaN(line[i])){
                first = line[i];
                break;
            }
        }
        
        for (var i = line.length - 1; i >= 0; i--){
            if (!isNaN(line[i])){
                last = line[i];
                break;
            }
        }
        
        total = parseInt(first)*10 + parseInt(last);
        totalSum += total;
        // console.log(`Line: ${line}, first: ${first}, last: ${last}, total: ${total}, totalSum: ${totalSum}`);
    });
})



"53326"