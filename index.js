let express = require('express');
let app = express();

// set public static folder
app.use(express.static(__dirname + '/public'));

// set and start server + port
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}` );
});


