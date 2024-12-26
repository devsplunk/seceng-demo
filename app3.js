const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

const viewsPath = path.join(__dirname, 'views');
const port = 8080;

// Middleware for logging
router.use((req, res, next) => {
console.log(`${req.method} request to ${req.path}`);
next();
});

// Route definitions
router.get('/', (req, res) => {
res.sendFile(`${viewsPath}/index.html`);
});

router.get('/info', (req, res) => {
res.sendFile(`${viewsPath}/info.html`);
});

// Static file serving
app.use(express.static(viewsPath));
app.use('/', router);

// Server listening
app.listen(port, () => {
console.log(`App listening on port ${port}!`);
});