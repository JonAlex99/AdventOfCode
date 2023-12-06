import fs from "fs";

// const filePath = "./1des-demo2.txt";
const filePath = "./1des-2.txt";

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
        typeof(lastInt) === "undefined" ? lastIntIndex = Number.MIN_VALUE : 0;
        typeof(lastString) === "undefined" ? lastStringIndex = Number.MIN_VALUE : 0;

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
            console.log("komst hingað " + lastStringIndex + " " + lastIntIndex)
        }

        totalSum += total;
        //if (stringstringInLine['lowest'][0])


        console.log("---------------------");
        console.log(line);
        console.log(stringInLine);
        console.log(intInLine);
        console.log(total);
        console.log(totalSum);
        // total = parseInt(first)*10 + parseInt(last);
        // totalSum += total;
        // console.log(`Line: ${line}, first: ${first}, last: ${last}, total: ${total}, totalSum: ${totalSum}`);
    });
})



"53326"