// imports
const express = require('express')
const app = express()
const port = 3000

// static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// set views
app.set('views', './views')
app.set('views engine', 'handlebars')

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

// listen
app.listen(port, () => {
    console.info('listening on port ' + port );
});