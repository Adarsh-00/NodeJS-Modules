const fs = require('fs');

try {
    // fs.writeFileSync('example.txt' ,'This is written using Nodejs', 'utf-8'); // use to write to a file
    
    // const data = fs.readFile('example.txt', 'utf-8'); // use to read a file
    // console.log(data);

    // fs.appendFileSync('example.txt', '\nThis is appended text.', 'utf-8'); // use to append to a file
    
    // fs.unlinkSync('example.txt'); // use to delete a file

    // fs.mkdirSync('newDir'); // use to create a new directory
    
} catch (error) {
    console.log('Error writing to file:', error);
}