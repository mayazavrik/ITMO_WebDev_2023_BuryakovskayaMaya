const app = require('express')();
const fs = require('fs');
const fileUpload = require('express-fileupload');
require('dotenv').config();

console.log(process.env.USER_KEY);
console.log(__dirname);

app.use(fileUpload({}));

app.get('/', async (req, res) => {
    res.send(`<h2>Working!</h2>
        <form action="/upload" method="POST" encType="multipart/form-data">
            <label for="img">Choose a profile picture:</label>
            <input type="file"
                   id="img" name="image"
                   accept="image/png, image/jpeg">
            <input type="submit" value="Submit">
       </form>
        `);
});

app.get('/hello', async (req, res) => {
    let { name } = req.query;
    if (!name) name = 'unknown';
    res.send(`
        <header>
            <h2>Hello ${name}!</h2>
        </header>
    `);
});

app.post('/upload', function(req, res) {
    console.log(req.files); // the uploaded file object
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const sampleFile = req.files.image;
    const uploadPath = __dirname + '/images/' + sampleFile.name;
    sampleFile.mv(uploadPath, function(err) {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

app.use((req, res, next) => {
    res.status(404).send('Sorry can\'t find that!');
});

app.listen(process.env.NODE_PORT || 3000, () => {
    console.log('Example app listening');
});