import fs from "fs";

const filePath = "./1des-2.txt";

function fixTheNumbers(line){
    var tempLine = line.toLowerCase();
    var firstNumbers = {};
    var lastNumbers = {};
    var firstNumber;
    var lastNumber;

    if(tempLine.includes("one") || tempLine.includes("1")){

        tempLine.indexOf("one") < tempLine.indexOf("1") ? firstNumber = tempLine.indexOf("one") : firstNumber = tempLine.indexOf("1");
        tempLine.lastIndexOf("one") > tempLine.lastIndexOf("1") ? lastNumber = tempLine.lastIndexOf("one") : lastNumber = tempLine.lastIndexOf("1");
        
    }
    


    tempLine = tempLine.replaceAll("one", '1')
    tempLine = tempLine.replaceAll("two", '2')
    tempLine = tempLine.replaceAll("three", '3')
    tempLine = tempLine.replaceAll("four", '4')
    tempLine = tempLine.replaceAll("five", '5')
    tempLine = tempLine.replaceAll("six", '6')
    tempLine = tempLine.replaceAll("seven", '7')
    tempLine = tempLine.replaceAll("eight", '8')
    tempLine = tempLine.replaceAll("nine", '9')
    return tempLine;
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
        line = fixTheNumbers(line);
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
        console.log(`Line: ${line}, first: ${first}, last: ${last}, total: ${total}, totalSum: ${totalSum}`);
    });
})



"53326"