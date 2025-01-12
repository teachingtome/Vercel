const express = require('express');
const apiRoutes = require('./routes');

const app = express()
const PORT = 8000

app.use('/', apiRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
//
// app.get('/about', (req, res) => {
//     res.send('About route 🎉 ')
// })

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})
