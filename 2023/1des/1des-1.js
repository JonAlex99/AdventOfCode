import fs from "fs";

const filePath = "./1des-1.txt";

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    
    const lines = data.split('\n');
    
    var totalSum = 0;
    lines.forEach((line) => {
        line = line.replace(/(\r\n|\n|\r)/gm, "");
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