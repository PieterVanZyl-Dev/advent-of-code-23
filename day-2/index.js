import fs from "fs"

const lines = fs.readFileSync('./example.txt', "utf-8").split('\r\n');

isValidPartOne(lines);


function isValidPartOne(lines) {

    for(const line of lines)
    {
        console.log(line);

        const gameNumber = line.slice(5, line.indexOf(":"))
        console.log("gameNumber", parseInt(gameNumber));

    }

}



