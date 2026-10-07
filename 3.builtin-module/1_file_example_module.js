const fs = require('fs');

// fs.readFile("example.txt","utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const newContent = "This is the new content of the file."
fs.writeFile("example.txt", newContent,'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File has been updated successfully.");
});