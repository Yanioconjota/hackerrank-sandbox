const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../index.js');
    const jsContent = fs.readFileSync(filePath, 'utf8');
    res.send(`
        <html>
            <body>
                <h1>Console Output</h1>
                <script>
                    console.clear();
                    ${jsContent}
                </script>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
