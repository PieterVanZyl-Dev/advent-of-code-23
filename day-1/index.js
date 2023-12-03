import fs from "fs"

const lines = fs.readFileSync('./input.txt', "utf-8").split('\r\n');

decodePartOne(lines);
function decodePartOne(lines) {

    let total = 0;

    for(const line of lines)
    {
        let first = undefined
        let last = ''


        for(let index = 0; index < line.length; index++)
        {
          let char = line[index];
          let stringChar = undefined

            // Check if char starts with one of the letters for a digit 
            // o, t, f, s ,e, n
            if(isCharThatDigitStartsWith(char))
            {
            
                stringChar = checkStringDigit(line, index)
            }
            if(stringChar !== undefined && first === undefined)
            {
                first = stringChar
                last = stringChar
            }

            if(stringChar !== undefined)
            {
                last = stringChar
            }
            
            if(isDigit(char) && first === undefined)
            {
                first = char
                last = char
                
            }
            
            if(isDigit(char))
            {
                last = char
            }
        }

        const outputNumber = parseInt(first + last)
        console.log("on:", outputNumber);
        total += outputNumber;
    }
    console.log(total);
}

function isDigit(char) {
   return char >= '0' && char <= '9'
}

function isCharThatDigitStartsWith(char)
{
    return ['o', 't', 'f', 's' ,'e', 'n'].some((element) => element === char)
}

function checkStringDigit(line, startingIndex)
{

    const StringToDigitMap = new Map([
        ["one", "1"],
        ["two", "2"],
        ["three", "3"],
        ["four", "4"],
        ["five", "5"],
        ["six", "6"],
        ["seven", "7"],
        ["eight", "8"],
        ["nine", "9"],
      ]);


    let slice = line.slice(startingIndex, startingIndex + 5)


    const fives =  ["three", "seven", "eight"];

    const fours =  ["four", "five", "nine"]

    const threes =  ["one","two","six"]

    for(const digit of fives)
    {
        const isFiveDigit = slice.includes(digit);
        if(isFiveDigit)
        {
            return StringToDigitMap.get(digit);
        }
    }

    slice = line.slice(startingIndex, startingIndex + 4)

    for(const digit of fours)
    {
        const isFourDigit = slice.includes(digit);
        if(isFourDigit)
        {
            return StringToDigitMap.get(digit);
        }
    }

    slice = line.slice(startingIndex, startingIndex + 3)

    for(const digit of threes)
    {
        const isThreeDigit = slice.includes(digit);
        if(isThreeDigit)
        {
            return StringToDigitMap.get(digit);
        }
    }

}

// console.log(lines);
