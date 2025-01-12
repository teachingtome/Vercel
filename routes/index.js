const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world 🎉');
});
// Define your routes here
router.get('/about', (req, res) => {
    res.send('About route 🎉');
});

// Other routes...

module.exports = router;
