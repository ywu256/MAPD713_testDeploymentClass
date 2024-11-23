import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/test', (req, res) => {
    res.send("Hello World Test!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});