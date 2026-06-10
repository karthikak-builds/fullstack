const http = require('http');

const server = http.createServer((req, res) => {

    // Student details
    const studentName = "Arun";
    const marks = [85, 90, 78, 88, 92];

    // Calculate total
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    // Calculate average
    const average = total / marks.length;

    // Display output
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`<h1>Student Marks Details</h1>`);
    res.write(`<p><b>Name:</b> ${studentName}</p>`);
    res.write(`<p><b>Marks:</b> ${marks.join(", ")}</p>`);
    res.write(`<p><b>Total Marks:</b> ${total}</p>`);
    res.write(`<p><b>Average:</b> ${average}</p>`);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
