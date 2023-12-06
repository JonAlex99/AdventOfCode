import fs from 'fs'

const filePath = "./2des-input.txt"
// const filePath = "./2des-demo.txt"

const bagContents = {"red" : 12, "green" : 13, "blue" : 14};
var sumOfGameNumbers = 0;

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const regexBalls = /(:|;)\s*([^;]+)/g
    const regexGame = /^Game (\d+):/;
    const regexBall = /(\d+)\s(\w+)/g;

    const lines = data.split('\n');
    var currentGame = {"red" : 0, "green" : 0, "blue" : 0}

    lines.forEach((line) => {
        line = line.replace(/(\r\n|\n|\r)/gm, "");

        const gameMatch = line.match(regexGame)
        const gameNumber = gameMatch ? gameMatch[1] : null;

        const ballsMatch = line.matchAll(regexBalls);
        const balls = Array.from(ballsMatch, match => match[2])

        
        
        console.log(gameNumber) 
        console.log(balls)
        currentGame = {"red" : 0, "green" : 0, "blue" : 0}
        balls.forEach(ball => {
            const matches = ball.matchAll(regexBall);
            for (const match of matches){
                const [, number, color] = match;
                currentGame[color] < parseInt(number, 10) ? currentGame[color] = parseInt(number, 10) : null;
            }
        })
        sumOfGameNumbers += currentGame["red"]*currentGame["green"]*currentGame["blue"];
        console.log(currentGame)
        console.log(sumOfGameNumbers)
    })
});